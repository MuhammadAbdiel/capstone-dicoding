import React, { useState, useEffect, useContext } from 'react'
import Table from 'react-bootstrap/Table'
import { AiFillDelete, AiFillEdit, AiFillFileAdd } from 'react-icons/ai'
import { Button, Container } from 'react-bootstrap'
import { deleteCategory, getAllCategories } from '../../utils/network-data'
import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom'
import CreateCategoryModal from '../../components/Admin/CreateCategoryModal'
import EditCategoryModal from '../../components/Admin/EditCategoryModal'
import AppContext from '../../context/AppContext'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [idCategory, setIdCategory] = useState(0)
  const [isModalNewCategory, setIsModalNewCategory] = useState(false)
  const [isModalEditCategory, setIsModalEditCategory] = useState(false)
  const { setIsLoading } = useContext(AppContext)
  const handleCloseModalNewCategory = () => setIsModalNewCategory(false)
  const handleCloseModalEditCategory = () => setIsModalEditCategory(false)

  const handleShowModalEditCategory = (id) => {
    setIsModalEditCategory(true)
    setIdCategory(id)
  }

  const handleDelete = async (category) => {
    Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus kategori ini?',
      text: category.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Tidak'
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
      <h1 className='text-center'>Kategori</h1>
      <button className='floating' onClick={() => setIsModalNewCategory(true)}>
        <AiFillFileAdd size={30} />
      </button>
      <div className='mx-5 my-4'>
        <Table className='text-center mt-3' striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Kategori</th>
              <th>Aksi</th>
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
