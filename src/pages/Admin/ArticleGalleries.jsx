import React, { useState, useEffect, useContext } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { AiFillDelete, AiFillFileAdd } from 'react-icons/ai'
import { deleteArticleGallery, getAllArticleGalleries } from '../../utils/network-data'
import CreateArticleGalleryModal from '../../components/Admin/CreateArticleGalleryModal'
import Swal from 'sweetalert2'
import AppContext from '../../context/AppContext'

const ArticleGalleries = () => {
  const [articleGalleries, setArticleGalleries] = useState([])
  const [isModalNewArticleGallery, setIsModalNewArticleGallery] = useState(false)
  const { setIsLoading } = useContext(AppContext)

  const handleCloseModalNewArticleGallery = () => setIsModalNewArticleGallery(false)

  const handleDelete = async (articleGallery) => {
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus gambar ini?',
      text: articleGallery.image,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Tidak'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteArticleGallery(articleGallery.id)
        try {
          initData()
        } catch (e) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
      }
    })
  }

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllArticleGalleries()
      try {
        if (!response.error) {
          setIsLoading(false)
          setArticleGalleries(response.data.data)
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
      <h1 className='text-center'>Galeri Artikel</h1>
      <div className='d-flex px-3 pb-5 flex-wrap'>
        {articleGalleries.map((articleGallery) => (
          <Col key={articleGallery.id} className='my-3 px-3' lg={4} md={4} sm={6}>
            <Card className='h-100'>
              <Card.Img variant='top' src={articleGallery.image} />
              <Card.Body>
                <div className='d-flex justify-content-end'>
                  <Button variant='danger' type='button' onClick={() => handleDelete(articleGallery)}>
                    <AiFillDelete color='white' />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
      <button className='floating' onClick={() => setIsModalNewArticleGallery(true)}>
        <AiFillFileAdd size={30} />
      </button>
      {isModalNewArticleGallery && (
        <CreateArticleGalleryModal handleClose={handleCloseModalNewArticleGallery} fetchNewArticleGallery={initData} />
      )}
    </Container>
  )
}

export default ArticleGalleries
