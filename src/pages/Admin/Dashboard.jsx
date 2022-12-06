import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'

const Dashboard = () => {
  return (
    <div>
      <LayoutAdmin />
      <Container>
        <h1 className='text-center'>Dashboard Admin</h1>
      </Container>
    </div>
  )
}

export default Dashboard
