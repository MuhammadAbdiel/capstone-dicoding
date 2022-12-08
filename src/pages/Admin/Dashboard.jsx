import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2'
import { Col, Container, Row } from 'react-bootstrap'
import ArticleGallery from '../../images/dashboard/article_gallery.png'
import Article from '../../images/dashboard/article.png'
import {
  getAllArticleComments,
  getAllArticleGalleries,
  getAllArticles,
  getAllCategories,
  getAllDestinationGalleries,
  getAllDestinations,
  getAllTransactions
} from '../../utils/network-data'
import Category from '../../images/dashboard/categories.png'
import Comment from '../../images/dashboard/comments.png'
import DestinationGallery from '../../images/dashboard/destination_gallery.png'
import Destination from '../../images/dashboard/destination.png'
import Transaction from '../../images/dashboard/transaction.png'
import AppContext from '../../context/AppContext'

const Dashboard = () => {
  const { setIsLoading } = useContext(AppContext)
  const [articles, setArticles] = useState([])
  const [articleGalleries, setArticleGalleries] = useState([])
  const [articleComments, setArticleComments] = useState([])
  const [categories, setCategories] = useState([])
  const [destinations, setDestinations] = useState([])
  const [destinationGalleries, setDestinationGalleries] = useState([])
  const [transactions, setTransactions] = useState([])

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const responseArticle = await getAllArticles()
      try {
        if (!responseArticle.error) {
          setIsLoading(false)
          setArticles(responseArticle.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseArticleGallery = await getAllArticleGalleries()
      try {
        if (!responseArticleGallery.error) {
          setIsLoading(false)
          setArticleGalleries(responseArticleGallery.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseArticleComment = await getAllArticleComments()
      try {
        if (!responseArticleComment.error) {
          setIsLoading(false)
          setArticleComments(responseArticleComment.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseCategory = await getAllCategories()
      try {
        if (!responseCategory.error) {
          setIsLoading(false)
          setCategories(responseCategory.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseDestination = await getAllDestinations()
      try {
        if (!responseDestination.error) {
          setIsLoading(false)
          setDestinations(responseDestination.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseDestinationGallery = await getAllDestinationGalleries()
      try {
        if (!responseDestinationGallery.error) {
          setIsLoading(false)
          setDestinationGalleries(responseDestinationGallery.data.data)
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseTransaction = await getAllTransactions()
      try {
        if (!responseTransaction.error) {
          setIsLoading(false)
          setTransactions(responseTransaction.data.data)
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
      <Container>
        <h1 className='text-center mb-5'>Admin Dashboard</h1>
        <Row className='justify-content-center'>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={Article} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{articles.length}</h4>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={ArticleGallery} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{articleGalleries.length}</h4>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={Comment} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{articleComments.length}</h4>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={Category} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{categories.length}</h4>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={Destination} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{destinations.length}</h4>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={DestinationGallery} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{destinationGalleries.length}</h4>
              </div>
            </div>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className='mb-3'>
            <div className='card'>
              <div className='card-header'>
                <img src={Transaction} className='card-img-top img-fluid' alt='' />
              </div>
              <div className='card-body text-center'>
                <h4>{transactions.length}</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard
