import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const FooterStyleComponent = () => {
  return (
    <footer className='card text-center position-sticky w-100 mt-4'>
      <div className='card-body'>
        <h5 className='card-title'>GoWisata</h5>
        <p className='card-text'>Hubungi kami untuk informasi lebih lanjut.</p>
        <a href='#' className='btn mx-1 text-white' style={{ backgroundColor: '#0AA1DD' }}>
          <FaInstagram />
        </a>
        <a href='#' className='btn mx-1 text-white' style={{ backgroundColor: '#0AA1DD' }}>
          <FaLinkedin />
        </a>
        <a href='#' className='btn mx-1 text-white' style={{ backgroundColor: '#0AA1DD' }}>
          <FaInstagram />
        </a>
      </div>
      <div className='footer p-2 text-white' style={{ backgroundColor: '#0AA1DD' }}>
        Copyright © 2022. GoWisata, All rights reserved
      </div>
    </footer>
  )
}

export default FooterStyleComponent
