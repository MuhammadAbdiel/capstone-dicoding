import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { getCategoryById, updateCategory } from '../../utils/network-data'

const EditCategoryModal = ({ id, handleClose, fetchNewCategory }) => {
  const [name, setName] = useState('')

  const handleUpdateCategory = async (event) => {
    event.preventDefault()
    if (name !== '') {
      const response = await updateCategory({ name }, id)
      try {
        if (!response.error && !response.data.message) {
          fetchNewCategory()
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
    } else if (name === '') {
      Swal.fire({
        icon: 'error',
        title: 'There is empty input field',
        text: 'Please fill all input fields'
      })
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const initData = () => {
    const fetchData = async () => {
      const response = await getCategoryById(id)
      try {
        if (!response.error) {
          setName(response.data.data.name)
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

  useEffect(() => {
    initData()
  }, [])

  return (
    <>
      <Modal show={true} onHide={handleClose} backdrop='static' keyboard={false} size='xl' scrollable={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formArticleName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category Name'
                style={{ fontWeight: '600' }}
                onChange={handleNameChange}
                value={name}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' className='d-flex' onClick={handleUpdateCategory}>
            <FaSave size={25} className='pe-2' />
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditCategoryModal
