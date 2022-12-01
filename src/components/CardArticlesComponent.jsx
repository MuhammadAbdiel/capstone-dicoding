import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardArticlesComponent = ({ title, excerpt }) => {
  return (
    <Card className='m-4'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='descrp'>{excerpt}</Card.Text>
        <div className='d-flex justify-content-end'>
          <Link to='/articles/detail'>
            <Button variant='primary'>View More</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardArticlesComponent