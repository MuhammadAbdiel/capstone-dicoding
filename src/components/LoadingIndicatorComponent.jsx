import React from 'react'
import '../styles/LoadingIndicator.css'

const LoadingIndicatorComponent = () => {
  return (
    <div className='overlay-loading'>
      <div className='dots'>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
      </div>
    </div>
  )
}

export default LoadingIndicatorComponent
