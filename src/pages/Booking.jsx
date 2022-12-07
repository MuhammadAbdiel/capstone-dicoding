import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { getAllTransactionUsers } from '../utils/network-data'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import LoadingIndicatorComponent from '../components/LoadingIndicatorComponent'

const Booking = () => {
  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllTransactionUsers()
      try {
        if (!response.error) {
          setIsLoading(false)
          setTransactions(response.data.transactions)
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
      <HeaderComponent />
      <Container className='my-3 pb-5'>
        <Row>
          {transactions.map((transaction) =>
            transaction.detail_transactions.map((detail) => (
              <Col sm={12} className='mt-3' key={transaction.id}>
                <Card className='px-3 py-1'>
                  <Row>
                    <Col lg={3} md={5} className='my-3'>
                      <Card.Img src={detail.destination.destination_galleries[0].image}></Card.Img>
                    </Col>
                    <Col lg={9} md={7} className='my-3'>
                      <h5>{detail.destination.name}</h5>
                      <p className='text-muted'>
                        {new Date(detail.created_at).toDateString()} {new Date(detail.created_at).toLocaleTimeString()}
                      </p>
                      <p>Quantity : {detail.quantity}</p>
                      <p>Total : Rp. {detail.price}</p>
                      {transaction.transaction_status == 0 ? (
                        <div className='badge bg-danger'>Dibatalkan</div>
                      ) : transaction.transaction_status == 1 ? (
                        <>
                          <div className='badge bg-warning'>Belum dibayar</div>
                          <Link className='d-block'>
                            <div className='badge bg-primary'>Bayar</div>
                          </Link>
                        </>
                      ) : (
                        <div className='badge bg-success'>Sudah dibayar</div>
                      )}
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Booking
