import React, { useState, useEffect, useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import CardArticlesComponent from '../components/CardArticlesComponent'
import FooterComponent from '../components/FooterComponent'
import AppContext from '../context/AppContext'
import { getAllArticles } from '../utils/network-data'

const Article = () => {
  const [articles, setArticles] = useState([])
  const { setIsLoading } = useContext(AppContext)

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
      <h1 className='text-center pt-3'>Artikel Wisata</h1>
      <Container className='my-4'>
        <Row>
          {articles.map((article) => (
            <CardArticlesComponent
              key={article.id}
              id={article.id}
              image_article={article.article_galleries[0]}
              title={article.title}
              excerpt={article.excerpt}
            />
          ))}
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Article
