import React from 'react'
import { TiWarningOutline } from 'react-icons/ti'

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex flex-column align-items-center mt-3 pb-3 rounded-3 not-found'>
        <TiWarningOutline className='warning-icon' />
        <h1>404</h1>
        <p>Halaman Tidak Tersedia</p>
        <p>Halaman yang anda minta tidak dapat ditemukan!</p>
      </div>
    </div>
  )
}

export default NotFound
