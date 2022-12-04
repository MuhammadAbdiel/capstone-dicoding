import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CardWishlistsComponent from '../components/CardWishlistsComponent'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import { getAllWishlistUsers } from '../utils/network-data'
import Swal from 'sweetalert2'

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
        <h1 className='text-center py-3'>Wishlists</h1>
        {userWishlists.map((wishlist) => (
          <CardWishlistsComponent
            key={wishlist.id}
            name={wishlist.destination.name}
            description={wishlist.destination.description}
            id={wishlist.destination.id}
          />
        ))}
      </Container>
      <FooterComponent />
    </>
  )
}

export default Wishlists
