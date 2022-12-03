import React, { useEffect, useState } from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import { getArticleById, getUserLogged } from '../utils/network-data'
import Swal from 'sweetalert2'
import { Button, Container, Form } from 'react-bootstrap'

const DetailArticle = () => {
  const [article, setArticle] = useState({})
  const [articleGalleries, setArticleGalleries] = useState([])
  const [authedUser, setAuthedUser] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArticleById(id)
      try {
        if (!response.error) {
          setArticle(response.data.data)
          setArticleGalleries(response.data.data.article_galleries[0])
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      if (!localStorage.getItem('accessToken')) {
        setAuthedUser(null)
      } else {
        const userLogged = await getUserLogged()

        setAuthedUser(userLogged.data.data)
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
            <Card.Img className='my-5' variant='top' src={articleGalleries.image} />
            <Card.Text className='pb-5'>{article.content}</Card.Text>
            {authedUser && (
              <>
                <h3>Comments</h3>
                <Form>
                  <Form.Group className='mb-3' controlId='formComment'>
                    <Form.Control type='text' placeholder='Enter your comment!' />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </>
            )}
          </Card.Body>
        </Container>
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailArticle
