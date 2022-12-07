import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import useInput from '../useInput'
import Swal from 'sweetalert2'
import { createCategory } from '../../utils/network-data'

const CreateCategoryModal = ({ handleClose, fetchNewCategory }) => {
  const [name, handleNameChange] = useInput('')

  const handleCreateCategory = async (event) => {
    event.preventDefault()
    if (name !== '') {
      const response = await createCategory({ name })
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
        title: 'Ada input yang kosong',
        text: 'Silahkan isi input yang kosong!'
      })
    }
  }

  return (
    <>
      <Modal show={true} onHide={handleClose} backdrop='static' keyboard={false} size='xl' scrollable={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan Kategori Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formArticleName'>
              <Form.Label>Nama</Form.Label>
              <Form.Control type='text' placeholder='Masukkan nama kategori' style={{ fontWeight: '600' }} onChange={handleNameChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='d-flex' onClick={handleCreateCategory}>
            <FaSave size={25} className='pe-2' />
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateCategoryModal
