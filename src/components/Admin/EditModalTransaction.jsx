import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { FaSave } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { getTransactionById, updateTransaction } from '../../utils/network-data'

const EditModalTransaction = ({ id, handleClose, fetchTransaction }) => {
  const [transactionStatus, setTransactionStatus] = useState('')

  const handleUpdateTransaction = async (event) => {
    event.preventDefault()
    const response = await updateTransaction({ transaction_status: transactionStatus }, id)
    try {
      if (!response.error && !response.data.message) {
        fetchTransaction()
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
  }

  const handleTransactionStatusChange = (e) => {
    setTransactionStatus(e.target.value)
  }

  const initData = () => {
    const fetchData = async () => {
      const response = await getTransactionById(id)
      try {
        if (!response.error) {
          setTransactionStatus(response.data.data.transaction_status)
        }
      } catch (error) {
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
    <>
      <Modal show={true} onHide={handleClose} backdrop='static' keyboard={false} size='xl' scrollable={true} centered={true}>
        <Modal.Header closeButton>
          <Modal.Title>Perbarui Status Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='px-5'>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Status Transaksi</Form.Label>
              <Form.Select value={transactionStatus} onChange={handleTransactionStatusChange}>
                <option value='' disabled={true}>
                  --Pilih Status--
                </option>
                <option value={0}>Dibatalkan</option>
                <option value={1}>Belum dibayar</option>
                <option value={2}>Sudah dibayar</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' className='d-flex' onClick={handleUpdateTransaction}>
            <FaSave size={25} className='pe-2' />
            Perbarui
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditModalTransaction
