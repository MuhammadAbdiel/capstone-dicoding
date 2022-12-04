import React from 'react'
import { Container } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'

const Order = () => {
  return (
    <>
      <HeaderComponent />
      <Container className='my-3'>
        <h1>Order</h1>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Order
