import React, { useEffect, useState, useContext } from 'react'
import CardComponent from '../components/CardComponent'
import FooterComponent from '../components/FooterComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { getAllDestinations } from '../utils/network-data'
import Swal from 'sweetalert2'
import AppContext from '../context/AppContext'

const Explore = () => {
  const [destinations, setDestinations] = useState([])
  const { setIsLoading } = useContext(AppContext)

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllDestinations()
      try {
        if (!response.error) {
          setIsLoading(false)
          setDestinations(response.data.data)
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
    <>
      <Container className='my-4'>
        <Row>
          {destinations.map((destination) => (
            <CardComponent
              key={destination.id}
              name={destination.name}
              description={destination.description}
              id={destination.id}
              image={destination.destination_galleries[0].image}
            />
          ))}
        </Row>
      </Container>

      <FooterComponent />
    </>
  )
}

export default Explore
