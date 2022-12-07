import React, { useEffect } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Travel from '../images/assets/Journey-amico.webp'
import Article from '../images/assets/article-news.webp'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FaInfoCircle } from 'react-icons/fa'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { FaPencilRuler } from 'react-icons/fa'
// import FooterStyleComponent from '../components/FooterStyleComponent'
import AOS from 'aos'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
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
          <Link to='/tourism'>
            <button>Start My Trip</button>
          </Link>
        </div>
      </div>
      <div className='mt-5 '>
        <Container>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={5}>
              <Card.Img height={400} width={800} src={Travel} data-aos={'fade-right'} />
            </Col>
            <Col data-aos={'fade-left'} sm={5} className='mt-5 p-lg-5'>
              <h2 className='text-center'>Want to Go on Vacation?</h2>
              <p>
                Have you ever been confused to find information about interesting tours in Malang? or looking for places that are popular
                and have never been visited in Malang? .now GoWisata is here to solve your problem, at GoWisata you can find information
                about interesting tourism in the Malang area, not only information about tourism, at GoWisata there are also travel ticket
                bookings available which will definitely make it easier for you and your family to visit various tourist attractions in
                poor. Come on, register your account immediately and order tickets now.
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
                <Card.Img height={500} width={800} src={Article} data-aos={'fade-right'} />
              </div>
            </Col>
            <Col sm={5} className='mt-5 p-lg-5' data-aos={'fade-left'}>
              <h2 className='text-center'>Latest news about travel ?</h2>
              <p>
                On GoWisata, an article page is also available which makes it easier for you to find out the latest news about tourism
                around Semarang district.
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
      <h1 className='text-center fs-3 mt-3'>Apa yang bisa kami bantu?</h1>
      <div className='d-grid container mb-4 mt-4'>
        <div className='row flex-column flex-md-row'>
          <div className='col mt-2'>
            <div className='d-flex justify-content-center'>
              <FaInfoCircle className='fs-1 border border-dark border-2 rounded-circle p-1' />
            </div>
            <p style={{ textAlign: 'justify' }}>
              Aplikasi GoWisata memberikan informasi mengenai artikel tempat liburan, yang mana membuat anda tidak bingung untuk mencari
              tempat wisata yang ada di kabupaten Malang. (masing bingung logo apa)
            </p>
          </div>
          <div className='col mt-2'>
            <div className='d-flex justify-content-center'>
              <FaPencilRuler className='fs-1 border border-dark border-2 rounded-circle p-1' />
            </div>
            <p style={{ textAlign: 'justify' }}>
              Tersedia juga informasi mengenai peraturan masing-masing wisata. Peraturan ini juga dibuat berdasarkan beberapa komplain dari
              pengunjung lain yang merasa terganggu karena pengunjung lainnya yang meresahkan.
            </p>
          </div>
          <div className='col mt-2'>
            <div className='d-flex justify-content-center'>
              <FaMoneyCheckAlt className='fs-1 border border-dark border-2 rounded-circle p-1' />
            </div>
            <p style={{ textAlign: 'justify' }}>
              Tersedia fitur pembayaran dengan berbagai macam Bank Account Number yang mana memudahkan anda dalam melakukan proses masuk
              tanpa membeli tiket secara offline.
            </p>
          </div>
        </div>
      </div>
      <FooterComponent />
      {/* <FooterStyleComponent /> */}
    </>
  )
}

export default Home
