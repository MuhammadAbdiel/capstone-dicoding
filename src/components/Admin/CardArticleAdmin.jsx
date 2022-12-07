import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import placeholderImage from '../../images/assets/banner.jpg'
import Swal from 'sweetalert2'
import { deleteArticle } from '../../utils/network-data'

const CardArticlesAdmin = ({ handleShowModalEdit, article, refreshArticle }) => {
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus artikel ini?',
      text: article.title,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteArticle(id)
        try {
          refreshArticle()
        } catch (e) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
      }
    })
  }

  return (
    <Col className='my-3 px-3' lg={4} md={4} sm={6}>
      <Card className='h-100'>
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title className='text-center'>{article.title}</Card.Title>
          <img
            src={article.article_galleries.length === 0 ? placeholderImage : article.article_galleries[0].image}
            className='card-img-top my-3'
            alt='article.title'
          />
          <Card.Text className='descrp'>{article.excerpt}</Card.Text>
          <div className='d-flex justify-content-end'>
            <Button variant='secondary' type='button' className='mx-3' onClick={() => handleShowModalEdit(article.id)}>
              <AiFillEdit color='white' />
            </Button>
            <Button variant='danger' type='button' onClick={() => handleDelete(article.id)}>
              <AiFillDelete color='white' />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardArticlesAdmin
