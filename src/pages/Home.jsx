import React, { useState, useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import LoadingIndicatorComponent from '../components/LoadingIndicatorComponent'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false)
    })
  }, [])
  return (
    <>
      <HeaderComponent />
      {isLoading && <LoadingIndicatorComponent />}
      <div className='jumbotron'>
        <img
          src='https://cdn.wisata.app/diary/f7c0cded-dbf8-46b4-87cd-98ad7a341453.jpg'
          alt='Pantai tiga warna'
          className='jumbotron-img'
        />
        <div className='jumbotron-text-overlay'>
          <h1>Bukit Teletubbies Batu</h1>
          <p>Nikmati liburan bersama keluarga melihat indah nya pemandangan Bukit Teletubbies Batu</p>
          <button>Start My Trip</button>
        </div>
      </div>
      <div>onProgress</div>
      <div>onProgress</div>
      <div>onProgress</div>
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
