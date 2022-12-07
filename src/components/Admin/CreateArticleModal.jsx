import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import { createArticle, getAllCategories } from '../../utils/network-data'
import useInput from '../useInput'
import Swal from 'sweetalert2'

const CreateArticleModal = ({ handleClose, fetchNewArticle }) => {
  const [categories, setCategories] = useState([])
  const [title, handleTitleChange] = useInput('')
  const [excerpt, handleExcerptChange] = useInput('')
  const [content, handleContentChange] = useInput('')
  const [categoryValue, setCategoryValue] = useState('')

  const handleCategoryValue = (e) => {
    setCategoryValue(e.target.value)
  }
  const handleCreateArticle = async (event) => {
    event.preventDefault()
    if (title !== '' && excerpt !== '' && content !== '' && categoryValue != '') {
      const response = await createArticle({ title, excerpt, content, category_id: categoryValue })
      try {
        if (!response.error && !response.data.message) {
          fetchNewArticle()
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
    } else if (title === '' || excerpt === '' || content === '' || categoryValue == '') {
      Swal.fire({
        icon: 'error',
        title: 'Ada input yang kosong',
        text: 'Silahkan isi input yang kosong!'
      })
    }
  }

  const initData = () => {
    const fetchCategories = async () => {
      const response = await getAllCategories()
      try {
        if (!response.error) {
          setCategories(response.data.data)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    }
    fetchCategories()
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
          <Modal.Title>Tambahkan Artikel Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formArticleTitle'>
              <Form.Label>Judul</Form.Label>
              <Form.Control type='text' placeholder='Masukkan judul artikel' style={{ fontWeight: '600' }} onChange={handleTitleChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formArticleExcerpt'>
              <Form.Label>Kutipan</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Masukkan kutipan artikel'
                onKeyDown={autoHeightTextarea}
                onChange={handleExcerptChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formArticleContent'>
              <Form.Label>Isi</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Masukkan isi artikel'
                onKeyDown={autoHeightTextarea}
                onChange={handleContentChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Kategori</Form.Label>
              <Form.Select value={categoryValue} onChange={handleCategoryValue}>
                <option value='' disabled={true}>
                  --Pilih Kategori--
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='d-flex' onClick={handleCreateArticle}>
            <FaSave size={25} className='pe-2' />
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateArticleModal
