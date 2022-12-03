import React from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../images/logo192.png'

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
        </Container>
      </div>
      <FooterComponent />
    </div>
  )
}

export default AboutUs
