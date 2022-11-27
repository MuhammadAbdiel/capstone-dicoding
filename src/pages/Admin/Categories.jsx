import React from 'react'
import Table from 'react-bootstrap/Table'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { Button } from 'react-bootstrap'

const Categories = () => {
  return (
    <div>
      <LayoutAdmin />
      <div className='m-5'>
        <Table className='text-center' striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Hiburan</td>
              <td>
                <Button
                  variant='warning'
                  onClick={() => {
                    console.log('edit')
                  }}
                >
                  Edit
                </Button>{' '}
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
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Categories
