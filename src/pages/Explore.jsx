import React from 'react'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Explore = () => {
  return (
    <>
      <HeaderComponent />
      <Container>
        <Row>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Row>
      </Container>

      <FooterComponent />
    </>
  )
}

export default Explore
