import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import logo from '../images/logo192.png'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const CardComponent = ({ name, description, id, image }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <Col className='my-2' lg={3} md={4} sm={6}>
      <Card className='h-100' data-aos='zoom-in'>
        <Card.Img variant='top' loading='lazy' src={image} alt={name} className='img-card-tourism' />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='descrp'>{description}</Card.Text>
          <Link to={`/tourism/${id}`}>
            <Button variant='primary'>Lihat detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardComponent
