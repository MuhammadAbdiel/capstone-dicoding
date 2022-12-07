import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'

const Dashboard = () => {
  return (
    <div>
      <LayoutAdmin />
      <Container>
        <h1 className='text-center'>Admin Dashboard</h1>
      </Container>
    </div>
  )
}

export default Dashboard
