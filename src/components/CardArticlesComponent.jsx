import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardArticlesComponent = ({ image_article, title, excerpt, id }) => {
  return (
    <Col className='my-2' lg={4} md={4} sm={6}>
      <Card className='h-100'>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <img loading='lazy' src={image_article.image} className='card-img-top my-3' alt='' />
          <Card.Text className='descrp'>{excerpt}</Card.Text>
          <div className='d-flex justify-content-end'>
            <Link to={`/articles/${id}`}>
              <Button variant='primary'>View More</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardArticlesComponent
