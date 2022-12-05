import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { Button } from 'react-bootstrap'
import { getAllCategories } from '../../utils/network-data'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import LoadingIndicatorComponent from '../../components/LoadingIndicatorComponent'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
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
  }, [])

  return (
    <>
      {isLoading && <LoadingIndicatorComponent />}
      <LayoutAdmin />
      <div className='m-5'>
        <Link to='/admin/categories/add'>
          <Button variant='primary' type='button'>
            Add Category
          </Button>
        </Link>
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
                <td>{index}</td>
                <td>{category.name}</td>
                <td>
                  <Link to={`/admin/categories/${category.id}/edit`}>
                    <Button variant='warning'>Edit</Button>
                  </Link>{' '}
                  <Button
                    variant='danger'
                    onClick={() => {
                      console.log('delete')
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Categories
