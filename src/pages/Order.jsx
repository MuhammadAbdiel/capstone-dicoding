import React, { useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
// import useInput from '../components/useInput'
import { getDestinationById } from '../utils/network-data'

const Order = () => {
  // const navigate = useNavigate()
  // const { id } = useParams()
  // const [destination, setDestination] = useState({})
  // const [quantity, handleQuantityChange] = useInput('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDestinationById(id)
      try {
        if (!response.error) {
          setDestination(response.data.data)
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
  }, [id])

  return (
    <>
      <HeaderComponent />
      <Container className='my-3'>
        <h1>Order</h1>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Order
