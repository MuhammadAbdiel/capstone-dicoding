import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { TiWarningOutline } from 'react-icons/ti'
import FooterStyleComponent from '../components/FooterStyleComponent'
// import FooterComponent from '../components/FooterComponent'

const NotFoundPage = () => {
  return (
    <>
      <HeaderComponent />
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column align-items-center mt-3 pb-3 rounded-3 not-found'>
          <TiWarningOutline className='warning-icon' />
          <h1>404</h1>
          <p>Page Not Found!</p>
          <p>Halaman yang anda minta tidak dapat ditemukan!</p>
        </div>
      </div>
      <FooterStyleComponent />
    </>
  )
}

export default NotFoundPage
