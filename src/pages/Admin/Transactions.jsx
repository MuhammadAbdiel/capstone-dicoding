import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { AiFillFileAdd } from 'react-icons/ai'

const Transactions = () => {
  return (
    <Container>
      <LayoutAdmin />
      <h1 className='text-center'>Transactions</h1>
      <button className='floating'>
        <AiFillFileAdd size={30} />
      </button>
    </Container>
  )
}

export default Transactions
