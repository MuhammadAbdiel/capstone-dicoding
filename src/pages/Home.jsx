import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
// import FooterComponent from '../components/FooterComponent'
import FooterStyleComponent from '../components/FooterStyleComponent'

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <h1 className='text-center'>Home Page</h1>
      <FooterStyleComponent />
    </>
  )
}

export default Home
