import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <div className='jumbotron'>
        <img src='https://source.unsplash.com/U6t80TWJ1DM/1920x1280' alt='Pantai' className='jumbotron-img' />
        <div className='jumbotron-text-overlay'>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odio in officiis debitis recusandae consectetur minus!</p>
          <button>Start My Trip</button>
        </div>
      </div>
      <h1 className='text-center fs-3 mt-3'>Lorem</h1>
      <div className='d-grid container mb-4'>
        <div className='row'>
          <p className='col'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, necessitatibus libero obcaecati fugit laudantium nulla
            dolorem quisquam, esse fuga modi in sint accusantium incidunt ratione ullam possimus eos neque quibusdam.
          </p>
          <p className='col'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, necessitatibus libero obcaecati fugit laudantium nulla
            dolorem quisquam, esse fuga modi in sint accusantium incidunt ratione ullam possimus eos neque quibusdam.
          </p>
          <p className='col'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, necessitatibus libero obcaecati fugit laudantium nulla
            dolorem quisquam, esse fuga modi in sint accusantium incidunt ratione ullam possimus eos neque quibusdam.
          </p>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default Home
