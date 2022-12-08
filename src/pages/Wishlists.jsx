import React, { useState, useEffect, useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import { getAllWishlistUsers } from '../utils/network-data'
import Swal from 'sweetalert2'
import CardComponent from '../components/CardComponent'
import AppContext from '../context/AppContext'

const Wishlists = () => {
  const [userWishlists, setUserWishlists] = useState([])
  const { setIsLoading } = useContext(AppContext)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllWishlistUsers()
      try {
        if (!response.error) {
          setIsLoading(false)
          setUserWishlists(response.data.wishlists)
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
      <Container>
        <h1 className='text-center py-3'>Daftar Keinginan</h1>
        <Row>
          {userWishlists.map((wishlist) => (
            <CardComponent
              key={wishlist.id}
              name={wishlist.destination.name}
              description={wishlist.destination.description}
              id={wishlist.destination.id}
              image={wishlist.destination.destination_galleries[0].image}
            />
          ))}
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Wishlists
