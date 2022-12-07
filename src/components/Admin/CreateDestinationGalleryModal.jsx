import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import useInput from '../useInput'
import Swal from 'sweetalert2'
import { createDestinationGallery, getAllDestinations } from '../../utils/network-data'

const CreateDestinationGalleryModal = ({ handleClose, fetchNewDestinationGallery }) => {
  const [destinations, setDestinations] = useState([])
  const [image, handleImageChange] = useInput('')
  const [destinationValue, setDestinationValue] = useState('')

  const handleDestinationValue = (e) => {
    setDestinationValue(e.target.value)
  }

  const handleCreateDestinationGallery = async (event) => {
    event.preventDefault()
    if (image !== '') {
      const response = await createDestinationGallery({ image, destination_id: destinationValue })
      try {
        if (!response.error && !response.data.message) {
          fetchNewDestinationGallery()
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
    } else if (image === '') {
      Swal.fire({
        icon: 'error',
        title: 'There is empty input field',
        text: 'Please fill all input fields'
      })
    }
  }

  const initData = () => {
    const fetchArticles = async () => {
      const response = await getAllDestinations()
      try {
        if (!response.error) {
          setDestinations(response.data.data)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }

    fetchArticles()
  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <Modal show={true} onHide={handleClose} backdrop='static' keyboard={false} size='xl' scrollable={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formArticleGalleryImage'>
              <Form.Label>Image</Form.Label>
              <Form.Control type='text' placeholder='Enter image link' style={{ fontWeight: '600' }} onChange={handleImageChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Destination</Form.Label>
              <Form.Select value={destinationValue} onChange={handleDestinationValue}>
                <option value='' disabled={true}>
                  --Select Destination--
                </option>
                {destinations.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='d-flex' onClick={handleCreateDestinationGallery}>
            <FaSave size={25} className='pe-2' />
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateDestinationGalleryModal
