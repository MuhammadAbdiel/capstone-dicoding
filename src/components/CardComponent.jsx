import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import logo from '../images/logo192.png'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const CardComponent = () => {
  return (
    <Col className='my-5 '>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text className='descrp'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Link to={`/tourism/detail`}>
            <Button variant='primary'>Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardComponent
