import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import useInput from '../components/useInput'
import { createTransaction, getDestinationById } from '../utils/network-data'
import Swal from 'sweetalert2'

const Order = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [destination, setDestination] = useState({})
  const [destinationGallery, setDestinationGallery] = useState({})
  const [quantity, handleQuantityChange] = useInput('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (quantity === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Quantity is required!'
      })
    } else if (quantity === '0') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Quantity must be greater than 0!'
      })
    } else {
      const response = await createTransaction({ quantity }, id)
      try {
        if (!response.error) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Transaction created successfully!'
          })
          navigate('/user/booking')
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDestinationById(id)
      try {
        if (!response.error) {
          setDestination(response.data.data)
          setDestinationGallery(response.data.data.destination_galleries[0])
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }

    fetchData()
  }, [id])

  return (
    <>
      <HeaderComponent />
      <Container className='my-3 pb-5'>
        <div className='text-center mb-5'>
          <h1>Order</h1>
        </div>
        <Row>
          <Col lg={6} md={12}>
            <Card className='p-3'>
              <Card.Title className='text-center'>
                <h3>{destination.name}</h3>
              </Card.Title>
              <Card.Img src={destinationGallery.image} />
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card className='p-3'>
              <Card.Body>
                <p>{destination.description}</p>
                <p>Ticket Price : Rp. {destination.price}</p>
                <Form onSubmit={onSubmitHandler}>
                  <Form.Group controlId='formBasicQuantity'>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type='number' value={quantity} onChange={handleQuantityChange} />
                  </Form.Group>
                  <Button variant='primary' type='submit' className='mt-3'>
                    Order
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Order
