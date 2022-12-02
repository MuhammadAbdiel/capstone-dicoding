import React, { useEffect, useState } from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../utils/network-data'
import Swal from 'sweetalert2'

const DetailArticle = () => {
  const [article, setArticle] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArticleById(id)
      try {
        if (!response.error) {
          setArticle(response.data.data)
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
        <Card.Body>
          <Card.Title className='d-flex justify-content-center fw-bold'>
            <h1>{article.title}</h1>
          </Card.Title>
          <Card.Text>{article.content}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Title className='d-flex justify-content-start'>
            <h2>excerpt</h2>
          </Card.Title>
          <Card.Text className='text-center'>{article.excerpt}</Card.Text>
        </Card.Body>
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailArticle
