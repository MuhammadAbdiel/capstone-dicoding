import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { getAllWishlistUsers } from '../utils/network-data'
import Swal from 'sweetalert2'
import CardComponent from '../components/CardComponent'

const Wishlists = () => {
  const [userWishlists, setUserWishlists] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllWishlistUsers()
      try {
        if (!response.error) {
          setUserWishlists(response.data.wishlists)
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
  }, [])

  return (
    <>
      <HeaderComponent />
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
