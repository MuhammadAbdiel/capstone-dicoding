import React, { useEffect, useState } from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Card from 'react-bootstrap/Card'
import { Link, useParams } from 'react-router-dom'
import { createArticleComment, getArticleById, getArticleCommentsByArticleId, getUserLogged } from '../utils/network-data'
import Swal from 'sweetalert2'
import { Button, Container, Form } from 'react-bootstrap'
import useInput from '../components/useInput'

const DetailArticle = () => {
  const [article, setArticle] = useState({})
  const [articleComments, setArticleComments] = useState([])
  const [articleGalleries, setArticleGalleries] = useState([])
  const [comment, handleCommentChange] = useInput('')
  const [authedUser, setAuthedUser] = useState(null)
  const { id } = useParams()

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const response = await createArticleComment({ content: comment }, id)
    try {
      if (!response.error) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Comment has been created!'
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      })
    }
  }

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

      const getComments = await getArticleCommentsByArticleId(id)
      try {
        if (!getComments.error) {
          setArticleComments(getComments.data.comments)
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
            <h3>Comments</h3>
            {articleComments.map((articleComment) => (
              <Card key={articleComment.id} className='mb-3 p-3'>
                <Card.Title>{articleComment.user.name}</Card.Title>
                <p className='text-muted'>
                  {new Date(articleComment.updated_at).toDateString()} {new Date(articleComment.updated_at).toLocaleTimeString()}
                </p>
                <Card.Body className='p-1'>{articleComment.content}</Card.Body>
              </Card>
            ))}
            <Form onSubmit={onSubmitHandler} className='mt-5'>
              <Form.Group className='mb-3' controlId='formComment'>
                <Form.Control onChange={handleCommentChange} value={comment} type='text' placeholder='Enter your comment!' />
              </Form.Group>
              {authedUser != null ? (
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              ) : (
                <Link to='/login'>
                  <Button variant='primary' type='button'>
                    Submit
                  </Button>
                </Link>
              )}
            </Form>
          </Card.Body>
        </Container>
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailArticle
