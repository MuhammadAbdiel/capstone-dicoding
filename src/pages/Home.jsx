import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Travel from '../images/assets/Journey-amico.png'
import Article from '../images/assets/article-news.jpg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <div className='jumbotron'>
        <img
          src='https://cdn.wisata.app/diary/f7c0cded-dbf8-46b4-87cd-98ad7a341453.jpg'
          alt='Bukit Teletubbies Batu'
          className='jumbotron-img'
        />
        <div className='jumbotron-text-overlay'>
          <h1>Bukit Teletubbies Batu</h1>
          <p>Nikmati liburan bersama keluarga melihat indah nya pemandangan Bukit Teletubbies Batu</p>
          <button>Start My Trip</button>
        </div>
      </div>
      <div className='mt-5 '>
        <Container>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={5}>
              <Card.Img height={400} width={800} src={Travel} />
            </Col>
            <Col sm={5} className='mt-5 p-lg-5'>
              <h2 className='text-center'>Want to Go on Vacation?</h2>
              <p>
                Have you ever been confused to find information about interesting tours in Malang? or looking for places that are popular
                and have never been visited in Malang? .now NAMA is here to solve your problem, at NAMA you can find information about
                interesting tourism in the Malang area, not only information about tourism, at NAMA there are also travel ticket bookings
                available which will definitely make it easier for you and your family to visit various tourist attractions in poor. Come
                on, register your account immediately and order tickets now.
              </p>
              <div className='d-flex justify-content-end'>
                <Link to='/tourism'>
                  <Button variant='primary'>View</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={5} className='mt-5'>
              <div>
                <Card.Img height={500} width={800} src={Article} />
              </div>
            </Col>
            <Col sm={5} className='mt-5 p-lg-5'>
              <h2 className='text-center'>Latest news about travel</h2>
              <p>
                Di NAMA juga tersedia halaman artickel yang mempermudah anda untuk mencari tahu berita-berita terupdate seputar pariwisata
                yang ada di sekitar kabupaten semarang.
              </p>
              <div className='d-flex justify-content-end'>
                <Link to='/articles'>
                  <Button variant='primary'>View</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
