import React from 'react'

const FooterStyleComponent = () => {
  return (
    <footer className='card text-center position-sticky w-100 mt-4'>
      <div className='card-header' style={{ backgroundColor: '#0AA1DD' }}>
        Featured
      </div>
      <div className='card-body'>
        <h5 className='card-title'>Special title treatment</h5>
        <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
        <a href='#' className='btn' style={{ backgroundColor: '#0AA1DD' }}>
          Go somewhere
        </a>
      </div>
      <div className='card-footer' style={{ backgroundColor: '#0AA1DD' }}>
        Tiketin Apps
      </div>
    </footer>
  )
}

export default FooterStyleComponent
