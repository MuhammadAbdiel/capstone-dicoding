import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardArticlesComponent = ({ image_article, title, excerpt, id }) => {
  return (
    <Card className='mx-5'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img src={image_article.image} className='card-img-top my-3' alt='' />
        <Card.Text className='descrp'>{excerpt}</Card.Text>
        <div className='d-flex justify-content-end'>
          <Link to={`/articles/${id}`}>
            <Button variant='primary'>View More</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardArticlesComponent
