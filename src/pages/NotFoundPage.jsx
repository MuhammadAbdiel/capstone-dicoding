import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const NotFoundPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className='d-sm-flex flex-column mt-3 not-found'>
        <h1>404</h1>
        <p>Page Not Found!</p>
        <p>Halaman yang anda minta tidak dapat ditemukan!</p>
      </div>
    </>
  )
}

export default NotFoundPage
