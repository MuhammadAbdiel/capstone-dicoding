import React, { useEffect } from 'react'
import FooterComponent from '../components/FooterComponent'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Airplane from '../images/profile/airplane.png'
import Abdiel from '../images/profile/abdiel.jpg'
import Riko from '../images/profile/Riko.jpg'
import Dimas from '../images/profile/dimas.jpg'
import HowUse from '../images/assets/step_by_step_ilustration.webp'
import Ardin from '../images/profile/ardin.jpg'
// import CardGroup from 'react-bootstrap/CardGroup'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import AOS from 'aos'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <div>
      <div className='mt-5 '>
        <Container>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={4} className='mb-5'>
              <Card.Img className='img-fluid' height={400} width={800} src={Airplane} alt='logo gowisata' data-aos={'fade-right'} />
            </Col>
            <Col sm={6} className='pt-lg-5' data-aos={'fade-left'}>
              <div>
                <h2>Tentang GoWisata</h2>
                <p>
                  {/* GoWisata is a platform that is able to provide information to tourists to search for tourism and buy tourist tickets in
                  the Malang area. With the construction of a website-based system, it is hoped that it will make it easier for tourists to
                  go to tourist attractions in Malang district. */}
                  GoWisata adalah sebuah platform yang mampu memberikan informasi kepada wisatawan untuk mencari wisata dan membeli tiket
                  wisata di wilayah Malang. Dengan dibangunnya sistem berbasis website, diharapkan akan memudahkan wisatawan untuk berwisata
                  ke objek wisata di wilayah Malang.
                </p>
              </div>
            </Col>
          </Row>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={4} className='mb-5'>
              <Card.Img className='img-fluid' height={400} width={800} src={HowUse} alt='step by step ilustrasi' data-aos={'fade-right'} />
            </Col>
            <Col sm={6} className='pt-lg-5' data-aos={'fade-left'}>
              <div>
                <h2>Bagaimana cara menggunakan GoWisata?</h2>
                <p>
                  {/* When opening the GoWisata website for the first time, users will be directed to the home page which contains an
                  explanation of tourism features and articles on the website, and users can only see the home page, articles, tourism, and
                  about us the first time they open the GoWisata website. so that users can buy tickets and open the my booking page, the
                  user is required to register and log in first so that users can buy tickets and open the mybooking page */}
                  Saat membuka website GoWisata untuk pertama kalinya, pengguna akan diarahkan ke halaman home yang berisi penjelasan fitur
                  wisata dan artikel pada website, dan pengguna hanya dapat melihat halaman home, artikel, wisata, dan tentang kami pada
                  saat pertama kali membuka website GoWisata. Jadi, jika pengguna ingin membeli tiket dan membuka halaman pesanan saya,
                  pengguna diwajibkan untuk mendaftar dan login terlebih dahulu sehingga pengguna dapat membeli tiket dan membuka halaman
                  pesanan saya
                </p>
              </div>
            </Col>
          </Row>

          <h2 className='text-center p-5'>Tim Developer</h2>

          <Row className='mb-5'>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100' data-aos='fade-down' data-aos-easing='linear'>
                <Card.Img variant='top' src={Ardin} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Ardin Nugraha</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly mt-3'>
                    <a href='https://github.com/ardin2001' target='_blank' rel='noreferrer'>
                      <BsGithub size={30} color='#000000' />
                    </a>

                    <a href='https://www.linkedin.com/in/ardin-nugraha-b2536324b/' target='_blank' rel='noreferrer'>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </a>

                    <a href='https://www.instagram.com/ardin_nugrahaa/' target='_blank' rel='noreferrer'>
                      <BsInstagram size={30} color='#CE5614' />
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100' data-aos='fade-up' data-aos-easing='linear'>
                <Card.Img variant='top' src={Abdiel} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Muhammad Abdiel Firjatullah</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly mt-3'>
                    <a href='https://github.com/MuhammadAbdiel' target='_blank' rel='noreferrer'>
                      <BsGithub size={30} color='#000000' />
                    </a>

                    <a href='https://www.linkedin.com/in/muhammad-abdiel-firjatullah-19a1a7206/' target='_blank' rel='noreferrer'>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </a>

                    <a href='https://instagram.com/abdielfirdie' target='_blank' rel='noreferrer'>
                      <BsInstagram size={30} color='#CE5614' />
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100' data-aos='fade-down' data-aos-easing='linear'>
                <Card.Img variant='top' src={Riko} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Riko Airlan Ramadhan</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly mt-3'>
                    <a href='https://github.com/Rikoairlan57' target='_blank' rel='noreferrer'>
                      <BsGithub size={30} color='#000000' />
                    </a>

                    <a href='https://www.linkedin.com/in/riko-airlan-ramadhan-2ba98a217/' target='_blank' rel='noreferrer'>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </a>

                    <a href='https://www.instagram.com/rikoairlan/?hl=id' target='_blank' rel='noreferrer'>
                      <BsInstagram size={30} color='#CE5614' />
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100' data-aos='fade-up' data-aos-easing='linear'>
                <Card.Img variant='top' src={Dimas} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Dimas Octa Maulana</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly mt-3'>
                    <a href='https://github.com/dev-dimas' target='_blank' rel='noreferrer'>
                      <BsGithub size={30} color='#000000' />
                    </a>

                    <a href='https://www.linkedin.com/in/dimas-octa-maulana-360a12256/' target='_blank' rel='noreferrer'>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </a>

                    <a href='https://instagram.com/dev.dimas' target='_blank' rel='noreferrer'>
                      <BsInstagram size={30} color='#CE5614' />
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </div>
  )
}

export default AboutUs
