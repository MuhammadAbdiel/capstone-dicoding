import React, { useState, useEffect, useContext } from 'react'
import { default as Article } from '../../components/Admin/CardArticleAdmin'
import { AiFillFileAdd } from 'react-icons/ai'
import CreateArticleModal from '../../components/Admin/CreateArticleModal'
import { getAllArticles } from '../../utils/network-data'
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap'
import EditArticleModal from '../../components/Admin/EditArticleModal'
import AppContext from '../../context/AppContext'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [idArticle, setIdArticle] = useState(0)
  const [isModalNewArticle, setIsModalNewArticle] = useState(false)
  const [isModalEditArticle, setIsModalEditArticle] = useState(false)
  const { setIsLoading } = useContext(AppContext)
  const handleCloseModalNewArticle = () => setIsModalNewArticle(false)
  const handleCloseModalEditArticle = () => setIsModalEditArticle(false)

  const handleShowModalEditArticle = (id) => {
    setIsModalEditArticle(true)
    setIdArticle(id)
  }

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllArticles()
      try {
        if (!response.error) {
          setIsLoading(false)
          setArticles(response.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }

    fetchData()
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <Container>
      <h1 className='text-center'>Artikel</h1>
      <div className='my-articles d-flex px-3 pb-5 flex-wrap'>
        {articles.map((article) => (
          <Article key={article.id} handleShowModalEdit={handleShowModalEditArticle} article={article} refreshArticle={initData} />
        ))}
      </div>
      <button className='floating' onClick={() => setIsModalNewArticle(true)}>
        <AiFillFileAdd size={30} />
      </button>
      {isModalNewArticle && <CreateArticleModal handleClose={handleCloseModalNewArticle} fetchNewArticle={initData} />}
      {isModalEditArticle && <EditArticleModal id={idArticle} handleClose={handleCloseModalEditArticle} fetchNewArticle={initData} />}
    </Container>
  )
}

export default Articles
