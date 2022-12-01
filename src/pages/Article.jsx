import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import CardArticlesComponent from '../components/CardArticlesComponent'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { getAllArticles } from '../utils/network-data'

const Article = () => {
  const [articles, setArticles] = useState([])

  const initData = () => {
    const fetchData = async () => {
      const response = await getAllArticles()
      try {
        if (!response.error) {
          setArticles(response.data.data)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
      console.log(response)
    }

    fetchData()
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <HeaderComponent />
      <h1 className='text-center pt-3'>Articles Tourism</h1>
      {articles.map((article) => (
        <CardArticlesComponent key={article.id} title={article.title} excerpt={article.excerpt} />
      ))}
      <FooterComponent />
    </>
  )
}

export default Article