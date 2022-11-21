import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const FooterStyleComponent = () => {
  return (
    <footer className='card text-center position-sticky w-100 mt-4'>
      <div className='card-body'>
        <h5 className='card-title'>Special title treatment</h5>
        <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
        <a href='#' className='btn mx-1' style={{ backgroundColor: '#0AA1DD' }}>
          <FaInstagram />
        </a>
        <a href='#' className='btn mx-1' style={{ backgroundColor: '#0AA1DD' }}>
          <FaLinkedin />
        </a>
        <a href='#' className='btn mx-1' style={{ backgroundColor: '#0AA1DD' }}>
          <FaInstagram />
        </a>
      </div>
      <div className='footer p-2' style={{ backgroundColor: '#0AA1DD' }}>
        Tiketin Apps
      </div>
    </footer>
  )
}

export default FooterStyleComponent
