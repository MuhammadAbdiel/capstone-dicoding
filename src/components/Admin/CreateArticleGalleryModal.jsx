import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import useInput from '../useInput'
import Swal from 'sweetalert2'
import { createArticleGallery, getAllArticles } from '../../utils/network-data'

const CreateArticleGalleryModal = ({ handleClose, fetchNewArticleGallery }) => {
  const [articles, setArticles] = useState([])
  const [image, handleImageChange] = useInput('')
  const [articleValue, setArticleValue] = useState('')

  const handleArticleValue = (e) => {
    setArticleValue(e.target.value)
  }

  const handleCreateArticleGallery = async (event) => {
    event.preventDefault()
    if (image !== '') {
      const response = await createArticleGallery({ image, article_id: articleValue })
      try {
        if (!response.error && !response.data.message) {
          fetchNewArticleGallery()
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
        title: 'Ada input yang kosong',
        text: 'Silahkan isi input yang kosong!'
      })
    }
  }

  const initData = () => {
    const fetchArticles = async () => {
      const response = await getAllArticles()
      try {
        if (!response.error) {
          setArticles(response.data.data)
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
          <Modal.Title>Tambahkan Gambar Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formArticleGalleryImage'>
              <Form.Label>Gambar</Form.Label>
              <Form.Control type='text' placeholder='Masukkan tautan gambar' style={{ fontWeight: '600' }} onChange={handleImageChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Artikel</Form.Label>
              <Form.Select value={articleValue} onChange={handleArticleValue}>
                <option value='' disabled={true}>
                  --Pilih Artikel--
                </option>
                {articles.map((article) => (
                  <option key={article.id} value={article.id}>
                    {article.title}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' className='d-flex' onClick={handleCreateArticleGallery}>
            <FaSave size={25} className='pe-2' />
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateArticleGalleryModal
