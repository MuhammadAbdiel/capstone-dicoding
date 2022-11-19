import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import logo from '../images/logo192.png'

const CardComponent = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={logo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button style={{ backgroundColor: '#2155CD' }}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
