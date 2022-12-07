import React, { useState, useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { getAllTransactions } from '../../utils/network-data'
import Swal from 'sweetalert2'
import LoadingIndicatorComponent from '../../components/LoadingIndicatorComponent'
import { AiFillEdit } from 'react-icons/ai'
import EditModalTransaction from '../../components/Admin/EditModalTransaction'

const Transactions = () => {
  const [transactions, setTransactions] = useState([])
  const [idTransaction, setIdTransaction] = useState(0)
  const [isModalEditTransaction, setIsModalEditTransaction] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCloseModalEditTransaction = () => setIsModalEditTransaction(false)

  const handleShowModalEditTransaction = (id) => {
    setIsModalEditTransaction(true)
    setIdTransaction(id)
  }

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllTransactions()
      try {
        if (!response.error) {
          setIsLoading(false)
          setTransactions(response.data.data)
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
      <h1 className='text-center'>Transactions</h1>
      <div className='mx-5 my-4'>
        <Table className='text-center mt-3' striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Destination</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {transactions.length > 0 ? (
            <tbody>
              {transactions.map((transaction) =>
                transaction.detail_transactions.map((detail, index) => (
                  <tr key={detail.id}>
                    <td>{index + 1}</td>
                    <td>{transaction.user.name}</td>
                    <td>{detail.destination.name}</td>
                    <td>{detail.quantity}</td>
                    <td>Rp. {detail.price}</td>
                    <td>
                      {transaction.transaction_status == 0 ? (
                        <div className='badge bg-danger'>Dibatalkan</div>
                      ) : transaction.transaction_status == 1 ? (
                        <div className='badge bg-warning'>Belum dibayar</div>
                      ) : (
                        <div className='badge bg-success'>Sudah dibayar</div>
                      )}
                    </td>
                    <td>
                      <Button
                        variant='secondary'
                        className='mx-3'
                        type='button'
                        onClick={() => handleShowModalEditTransaction(transaction.id)}
                      >
                        <AiFillEdit color='white' />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan='4'>No data</td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
      {isModalEditTransaction && (
        <EditModalTransaction id={idTransaction} fetchTransaction={initData} handleClose={handleCloseModalEditTransaction} />
      )}
    </Container>
  )
}

export default Transactions
