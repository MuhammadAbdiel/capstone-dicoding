import React, { useState, useEffect } from 'react'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { default as Article } from '../../components/Admin/CardArticleAdmin'
import { AiFillFileAdd } from 'react-icons/ai'
import CreateArticleModal from '../../components/Admin/CreateArticleModal'
import { getAllArticles } from '../../utils/network-data'
import Swal from 'sweetalert2'
import LoadingIndicatorComponent from '../../components/LoadingIndicatorComponent'
const Articles = () => {
  const [articles, setArticles] = useState([])
  const [isModalNewArticle, setIsModalNewArticle] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCloseModal = () => setIsModalNewArticle(false)

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
    <>
      {isLoading && <LoadingIndicatorComponent />}
      <LayoutAdmin />
      <h1 className='text-center'>Articles</h1>
      <div className='my-articles d-flex px-3 pb-5 flex-wrap'>
        {articles.map((article) => (
          <Article key={article.id} article={article} refreshArticle={initData} />
        ))}
      </div>
      <button className='floating' onClick={() => setIsModalNewArticle(true)}>
        <AiFillFileAdd size={30} />
      </button>
      {isModalNewArticle && <CreateArticleModal handleClose={handleCloseModal} fetchNewArticle={initData} />}
      {/* <Form className='px-5'>
        <Form.Group className='mb-3' controlId='formArticleTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter article title' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formArticleContent'>
          <Form.Label>Content</Form.Label>
          <Form.Control type='text' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form> */}
    </>
  )
}

export default Articles
