import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import { getAllCategories, getArticleById, updateArticle } from '../../utils/network-data'
import Swal from 'sweetalert2'

const EditArticleModal = ({ id, handleClose, fetchNewArticle }) => {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [excerpt, setExceprt] = useState('')
  const [content, setContent] = useState('')
  const [categoryValue, setCategoryValue] = useState('')

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleExcerptChange = (e) => {
    setExceprt(e.target.value)
  }

  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  const handleCategoryValue = (e) => {
    setCategoryValue(e.target.value)
  }
  const handleUpdateArticle = async (event) => {
    event.preventDefault()
    if (title !== '' && excerpt !== '' && content !== '' && categoryValue != '') {
      const response = await updateArticle({ title, excerpt, content, category_id: categoryValue }, id)
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
        title: 'There is empty input field',
        text: 'Please fill all input fields'
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

      const responseArticle = await getArticleById(id)
      try {
        if (!responseArticle.error) {
          setTitle(responseArticle.data.data.title)
          setExceprt(responseArticle.data.data.excerpt)
          setContent(responseArticle.data.data.content)
          setCategoryValue(responseArticle.data.data.category_id)
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
          <Modal.Title>Update Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formArticleTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter article title'
                style={{ fontWeight: '600' }}
                onChange={handleTitleChange}
                value={title}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formArticleExcerpt'>
              <Form.Label>Excerpt</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter article excerpt'
                onKeyDown={autoHeightTextarea}
                onChange={handleExcerptChange}
                value={excerpt}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formArticleContent'>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter article content'
                onKeyDown={autoHeightTextarea}
                onChange={handleContentChange}
                value={content}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Category</Form.Label>
              <Form.Select value={categoryValue} onChange={handleCategoryValue}>
                <option value='' disabled={true}>
                  --Select category--
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
          <Button variant='success' className='d-flex' onClick={handleUpdateArticle}>
            <FaSave size={25} className='pe-2' />
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditArticleModal
