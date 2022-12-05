import React from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../images/logo192.png'
import HowUse from '../images/assets/step_by_step_ilustration.png'
// import CardGroup from 'react-bootstrap/CardGroup'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

const AboutUs = () => {
  return (
    <div>
      <HeaderComponent />
      <div className='mt-5 '>
        <Container>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={5}>
              <Card.Img height={400} width={800} src={Logo} />
            </Col>
            <Col sm={5} className='mt-5 pt-lg-5'>
              <div>
                <h2>About GoWisata</h2>
                <p>
                  GoWisata is a platform that is able to provide information to tourists to search for tourism and buy tourist tickets in
                  the Malang area. With the construction of a website-based system, it is hoped that it will make it easier for tourists to
                  go to tourist attractions in Malang district.
                </p>
              </div>
            </Col>
          </Row>
          <Row className='d-flex justify-content-evenly'>
            <Col sm={5}>
              <Card.Img height={400} width={800} src={HowUse} />
            </Col>
            <Col sm={5} className='mt-5 pt-lg-5'>
              <div>
                <h2>How To Use GoWisata</h2>
                <p>
                  When opening the GoWisata website for the first time, users will be directed to the home page which contains an
                  explanation of tourism features and articles on the website, and users can only see the home page, articles, tourism, and
                  about us the first time they open the GoWisata website. so that users can buy tickets and open the my booking page, the
                  user is required to register and log in first so that users can buy tickets and open the mybooking page
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100'>
                <Card.Img variant='top' src={Logo} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Developer 1</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly'>
                    <i>
                      <BsGithub size={30} />
                    </i>
                    <i>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </i>
                    <i>
                      <BsInstagram size={30} color='#CE5614' />
                    </i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100'>
                <Card.Img variant='top' src={Logo} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Developer 1</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly'>
                    <i>
                      <BsGithub size={30} />
                    </i>
                    <i>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </i>
                    <i>
                      <BsInstagram size={30} color='#CE5614' />
                    </i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100'>
                <Card.Img variant='top' src={Logo} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Developer 1</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly'>
                    <i>
                      <BsGithub size={30} />
                    </i>
                    <i>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </i>
                    <i>
                      <BsInstagram size={30} color='#CE5614' />
                    </i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='my-2' lg={3} md={4} sm={6}>
              <Card className='h-100'>
                <Card.Img variant='top' src={Logo} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <Card.Title className='text-center'>Developer 1</Card.Title>
                  <Card.Text className='d-flex justify-content-evenly'>
                    <i>
                      <BsGithub size={30} />
                    </i>
                    <i>
                      <BsLinkedin size={30} color='#00A0DC' />
                    </i>
                    <i>
                      <BsInstagram size={30} color='#CE5614' />
                    </i>
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

// <Col className='m-1'>
//   <Card>
//     <Card.Img variant='top' src={Logo} />
//     <Card.Body>
//       <Card.Title className='text-center'>Developer 4</Card.Title>
//       <Card.Text className='d-flex justify-content-evenly'>
//         <i>
//           <BsGithub size={30} />
//         </i>
//         <i>
//           <BsLinkedin size={30} color='#00A0DC' />
//         </i>
//         <i>
//           <BsInstagram size={30} color='#CE5614' />
//         </i>
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </Col>
