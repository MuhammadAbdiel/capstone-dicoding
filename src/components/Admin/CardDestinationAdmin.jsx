import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import placeholderImage from '../../images/assets/banner.jpg'
import Swal from 'sweetalert2'
import { deleteDestination } from '../../utils/network-data'

const CardDestinationAdmin = ({ handleShowModalEdit, destination, refreshDestination }) => {
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus destinasi ini?',
      text: destination.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDestination(id)
        try {
          refreshDestination()
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
    <Col className='my-3 px-3' lg={3} md={4} sm={6}>
      <Card className='h-100'>
        <Card.Img
          variant='top'
          src={destination.destination_galleries.length === 0 ? placeholderImage : destination.destination_galleries[0].image}
          className='img-card-tourism'
        />
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Card.Title>{destination.name}</Card.Title>
          <Card.Text className='descrp'>{destination.description}</Card.Text>
          <div className='d-flex justify-content-end'>
            <Button variant='secondary' type='button' className='mx-3' onClick={() => handleShowModalEdit(destination.id)}>
              <AiFillEdit color='white' />
            </Button>
            <Button variant='danger' type='button' onClick={() => handleDelete(destination.id)}>
              <AiFillDelete color='white' />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CardDestinationAdmin
