import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import { createDestination } from '../../utils/network-data'
import useInput from '../useInput'
import Swal from 'sweetalert2'

const CreateDestinationModal = ({ handleClose, fetchNewDestination }) => {
  const [name, handleNameChange] = useInput('')
  const [openTime, handleOpenTimeChange] = useInput('')
  const [closeTime, handleCloseTimeChange] = useInput('')
  const [price, handlePriceChange] = useInput('')
  const [rating, handleRatingChange] = useInput('')
  const [location, handleLocationChange] = useInput('')
  const [description, handleDescriptionChange] = useInput('')

  const handleCreateDestination = async (event) => {
    event.preventDefault()
    if (name !== '' && openTime !== '' && closeTime !== '' && price !== '' && rating !== '' && location !== '' && description !== '') {
      const response = await createDestination({
        name,
        open_time: openTime,
        close_time: closeTime,
        price: parseInt(price),
        rating: parseFloat(rating),
        location,
        description
      })
      try {
        if (!response.error && !response.data.message) {
          fetchNewDestination()
          handleClose()
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error'
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    } else if (
      name === '' ||
      openTime === '' ||
      closeTime === '' ||
      price === '' ||
      rating === '' ||
      location === '' ||
      description === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'There is empty input field',
        text: 'Please fill all input fields'
      })
    }
  }

  const autoHeightTextarea = (e) => {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <>
      <Modal show={true} onHide={handleClose} backdrop='static' keyboard={false} size='xl' scrollable={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formDestinationName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter destination name' style={{ fontWeight: '600' }} onChange={handleNameChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationOpenTime'>
              <Form.Label>Open Time</Form.Label>
              <Form.Control type='text' placeholder='Enter destination open time' onChange={handleOpenTimeChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationCloseTime'>
              <Form.Label>Close Time</Form.Label>
              <Form.Control type='text' placeholder='Enter destination close time' onChange={handleCloseTimeChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationPrice'>
              <Form.Label>Price</Form.Label>
              <Form.Control type='number' placeholder='Enter destination price' onChange={handlePriceChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationRating'>
              <Form.Label>Rating</Form.Label>
              <Form.Control type='number' placeholder='Enter destination rating' onChange={handleRatingChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationLocation'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter article location'
                onKeyDown={autoHeightTextarea}
                onChange={handleLocationChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter article description'
                onKeyDown={autoHeightTextarea}
                onChange={handleDescriptionChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='d-flex' onClick={handleCreateDestination}>
            <FaSave size={25} className='pe-2' />
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateDestinationModal
