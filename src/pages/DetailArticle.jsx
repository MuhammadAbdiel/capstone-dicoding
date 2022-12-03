import React, { useEffect, useState } from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/network-data'
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap'

const DetailArticle = () => {
  const [article, setArticle] = useState({})
  const [articleGalleries, setArticleGalleries] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArticleById(id)
      try {
        if (!response.error) {
          setArticle(response.data.data)
          setArticleGalleries(response.data.data.article_galleries)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }
    fetchData()
  }, [id])
  return (
    <div>
      <HeaderComponent />
      <Card>
        <Container>
          <Card.Body>
            <Card.Title className='d-flex justify-content-center fw-bold'>
              <h1>{article.title}</h1>
            </Card.Title>
            <Card.Img className='my-5' variant='top' src={articleGalleries[0].image} />
            <Card.Text>{article.content}</Card.Text>
          </Card.Body>
        </Container>
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailArticle
