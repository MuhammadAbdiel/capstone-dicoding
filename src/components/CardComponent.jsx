import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
// import logo from '../images/logo192.png'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const CardComponent = ({ name, description, id }) => {
  return (
    <Col className='my-5' lg={3} md={4} sm={6}>
      <Card>
        {/* <Card.Img variant='top' src={destination_galleries} /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='descrp'>{description}</Card.Text>
          <Link to={`/tourism/${id}`}>
            <Button variant='primary'>Show more</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardComponent
