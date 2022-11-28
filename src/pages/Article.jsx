import React from 'react'
import CardArticlesComponent from '../components/CardArticlesComponent'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'

const Article = () => {
  return (
    <div>
      <HeaderComponent />
      <h1 className='text-center'>Articles Tourism</h1>
      <CardArticlesComponent />
      <CardArticlesComponent />
      <CardArticlesComponent />
      <CardArticlesComponent />
      <CardArticlesComponent />
      <FooterComponent />
    </div>
  )
}

export default Article
