import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import { getDataAdmin } from '../utils/network-data'
import Swal from 'sweetalert2'
import PaymentImage from '../images/credit-card.png'
import AppContext from '../context/AppContext'
const Payment = () => {
  const [dataAdmin, setDataAdmin] = useState({})
  const { setIsLoading } = useContext(AppContext)

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getDataAdmin()
      try {
        if (!response.error) {
          setIsLoading(false)
          setDataAdmin(response.data.data)
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
      <Container>
        <h1 className='my-3 text-center'>Pembayaran</h1>
        <div className='alert alert-success'>
          Silahkan melakukan pembayaran ke nomor rekening <b>{dataAdmin.bank_account_number}</b> a/n <b>{dataAdmin.name}</b>. Kemudian,
          kirim bukti pembayaran ke nomor <b>{dataAdmin.phone_number}</b>.
        </div>
        <div className='text-center'>
          <img src={PaymentImage} width='400' className='img-fluid' />
        </div>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Payment
