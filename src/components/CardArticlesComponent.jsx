import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const CardArticlesComponent = () => {
  return (
    <Card className='m-4'>
      <Card.Body>
        <Card.Title>Article title</Card.Title>
        <Card.Text className='descrp'>
          Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur laboriosam atque nostrum nihil ullam dicta! Quia modi,
          expedita maiores, quam alias omnis blanditiis cupiditate magni libero accusantium sapiente, eligendi ducimus. expedita maiores,
          quam alias omnis blanditiis cupiditate magni libero accusantium sapiente, eligendi ducimus. Lorem Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Consequatur laboriosam atque nostrum nihil ullam dicta! Quia modi, expedita maiores, quam alias
          omnis blanditiis cupiditate magni libero accusantium sapiente, eligendi ducimus. expedita maiores, quam alias omnis blanditiis
          cupiditate magni libero accusantium sapiente, eligendi ducimus.
        </Card.Text>
        <div className='d-flex justify-content-end'>
          <Button variant='primary'>View More</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardArticlesComponent
