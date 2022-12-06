import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import { updateDestination, getDestinationById } from '../../utils/network-data'
import Swal from 'sweetalert2'

const EditDestinationModal = ({ id, handleClose, fetchNewDestination }) => {
  const [name, setName] = useState('')
  const [openTime, setOpenTime] = useState('')
  const [closeTime, setCloseTime] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleOpenTimeChange = (event) => {
    setOpenTime(event.target.value)
  }

  const handleCloseTimeChange = (event) => {
    setCloseTime(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleRatingChange = (event) => {
    setRating(event.target.value)
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleUpdateDestination = async (event) => {
    event.preventDefault()
    if (name !== '' && openTime !== '' && closeTime !== '' && price !== '' && rating !== '' && location !== '' && description !== '') {
      const response = await updateDestination(
        {
          name,
          open_time: openTime,
          close_time: closeTime,
          price: parseInt(price),
          rating: parseFloat(rating),
          location,
          description
        },
        id
      )
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

  const initData = () => {
    const fetchData = async () => {
      const response = await getDestinationById(id)
      try {
        if (!response.error && !response.data.message) {
          setName(response.data.data.name)
          setOpenTime(response.data.data.open_time)
          setCloseTime(response.data.data.close_time)
          setPrice(response.data.data.price)
          setRating(response.data.data.rating)
          setLocation(response.data.data.location)
          setDescription(response.data.data.description)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }

    fetchData()
  }

  const autoHeightTextarea = (e) => {
    e.target.style.height = 'inherit'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <Modal show={true} onHide={handleClose} backdrop='static' keyboard={false} size='xl' scrollable={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Update Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formDestinationName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter destination name'
                style={{ fontWeight: '600' }}
                onChange={handleNameChange}
                value={name}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationOpenTime'>
              <Form.Label>Open Time</Form.Label>
              <Form.Control type='text' placeholder='Enter destination open time' onChange={handleOpenTimeChange} value={openTime} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationCloseTime'>
              <Form.Label>Close Time</Form.Label>
              <Form.Control type='text' placeholder='Enter destination close time' onChange={handleCloseTimeChange} value={closeTime} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationPrice'>
              <Form.Label>Price</Form.Label>
              <Form.Control type='number' placeholder='Enter destination price' onChange={handlePriceChange} value={price} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationRating'>
              <Form.Label>Rating</Form.Label>
              <Form.Control type='number' placeholder='Enter destination rating' onChange={handleRatingChange} value={rating} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationLocation'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter article location'
                onKeyDown={autoHeightTextarea}
                onChange={handleLocationChange}
                value={location}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDestinationDescription'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter article description'
                onKeyDown={autoHeightTextarea}
                onChange={handleDescriptionChange}
                value={description}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' className='d-flex' onClick={handleUpdateDestination}>
            <FaSave size={25} className='pe-2' />
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditDestinationModal
