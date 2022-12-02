import React, { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { getAllDestinations } from '../utils/network-data'
import Swal from 'sweetalert2'

const Explore = () => {
  const [destinations, setDestinations] = useState([])

  const initData = () => {
    const fetchData = async () => {
      const response = await getAllDestinations()
      try {
        if (!response.error) {
          setDestinations(response.data.data)
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
      <HeaderComponent />
      <Container>
        <Row>
          {destinations.map((destination) => (
            <CardComponent key={destination.id} name={destination.name} description={destination.description} id={destination.id} />
          ))}
        </Row>
      </Container>

      <FooterComponent />
    </>
  )
}

export default Explore
