import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { AiFillDelete, AiFillEdit, AiFillFileAdd } from 'react-icons/ai'
import { Button, Container } from 'react-bootstrap'
import { deleteCategory, getAllCategories } from '../../utils/network-data'
import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom'
import LoadingIndicatorComponent from '../../components/LoadingIndicatorComponent'
import CreateCategoryModal from '../../components/Admin/CreateCategoryModal'
import EditCategoryModal from '../../components/Admin/EditCategoryModal'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [idCategory, setIdCategory] = useState(0)
  const [isModalNewCategory, setIsModalNewCategory] = useState(false)
  const [isModalEditCategory, setIsModalEditCategory] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCloseModalNewCategory = () => setIsModalNewCategory(false)
  const handleCloseModalEditCategory = () => setIsModalEditCategory(false)

  const handleShowModalEditCategory = (id) => {
    setIsModalEditCategory(true)
    setIdCategory(id)
  }

  const handleDelete = async (category) => {
    Swal.fire({
      title: 'Are you sure you want to delete this category?',
      text: category.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCategory(category.id)
        try {
          initData()
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

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllCategories()
      try {
        if (!response.error) {
          setIsLoading(false)
          setCategories(response.data.data)
        }
      } catch (error) {
        setIsLoading(false)
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
    <Container>
      {isLoading && <LoadingIndicatorComponent />}
      <LayoutAdmin />
      <h1 className='text-center'>Categories</h1>
      <button className='floating' onClick={() => setIsModalNewCategory(true)}>
        <AiFillFileAdd size={30} />
      </button>
      <div className='mx-5 my-4'>
        <Table className='text-center mt-3' striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <Button variant='secondary' className='mx-3' type='button' onClick={() => handleShowModalEditCategory(category.id)}>
                    <AiFillEdit color='white' />
                  </Button>
                  <Button variant='danger' type='button' onClick={() => handleDelete(category)}>
                    <AiFillDelete color='white' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {isModalNewCategory && <CreateCategoryModal fetchNewCategory={initData} handleClose={handleCloseModalNewCategory} />}
      {isModalEditCategory && <EditCategoryModal id={idCategory} fetchNewCategory={initData} handleClose={handleCloseModalEditCategory} />}
    </Container>
  )
}

export default Categories
