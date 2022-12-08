import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import FooterComponent from '../components/FooterComponent'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import logo from '../images/logo192.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { checkWishlist, createWishlists, getDestinationById, getUserLogged } from '../utils/network-data'
// eslint-disable-next-line no-unused-vars
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import AppContext from '../context/AppContext'

const DetailTourism = () => {
  const [destination, setDestination] = useState({})
  const [destinationGalleries, setDestinationGalleries] = useState([])
  const [wishlist, setWishlist] = useState(false)
  const { id } = useParams()
  const { authedUser, setAuthedUser } = useContext(AppContext)

  const handleClickButton = async (event) => {
    event.preventDefault()
    const response = await createWishlists(id)
    try {
      if (!response.error) {
        if (wishlist) {
          setWishlist(false)
        } else {
          setWishlist(true)
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDestinationById(id)
      try {
        if (!response.error) {
          setDestination(response.data.data)
          setDestinationGalleries(response.data.data.destination_galleries)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      const responseWishlist = await checkWishlist(id)
      try {
        if (!responseWishlist.error) {
          setWishlist(responseWishlist.data.wishlist)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }

      if (!localStorage.getItem('accessToken')) {
        setAuthedUser(null)
      } else {
        const userLogged = await getUserLogged()

        try {
          if (!userLogged.error) {
            setAuthedUser(userLogged.data.data)
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          })
        }
      }
    }

    fetchData()
  }, [id])

  return (
    <div>
      <Card>
        {authedUser != null ? (
          <button onClick={handleClickButton} className='floating'>
            {wishlist ? <BsFillHeartFill className='fs-4'></BsFillHeartFill> : <BsHeart className='fs-4'></BsHeart>}
          </button>
        ) : (
          <Link to='/login'>
            <button className='floating'>
              <BsHeart className='fs-4'></BsHeart>
            </button>
          </Link>
        )}
        <Card.Body>
          <Card.Title className='d-flex justify-content-center fw-bold'>
            <h1>{destination.name}</h1>
          </Card.Title>
          <Card.Text>
            <h3 className='d-flex align-items-center justify-content-center'>
              <FaStar style={{ width: '28px', color: '#fcba03' }} />
              &nbsp; {destination.rating}
            </h3>
          </Card.Text>
          <Container>
            <Row className='flex-column flex-lg-row'>
              <Col className='mt-3'>
                <Card className='p-5'>
                  <Card.Text>
                    <p>{destination.description}</p>
                    <p>
                      Waktu buka : {destination.open_time} - {destination.close_time}
                    </p>
                    <p>Harga Tiket : Rp. {destination.price}</p>
                    <p>Lokasi : {destination.location}</p>
                  </Card.Text>
                  {authedUser != null ? (
                    <Link to={`/order/${id}`}>
                      <Button>Beli Tiket</Button>
                    </Link>
                  ) : (
                    <Link to='/login'>
                      <Button>Beli Tiket</Button>
                    </Link>
                  )}
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>

        <Card.Body>
          <Card.Title className='d-flex justify-content-center'></Card.Title>
          <Container className='d-flex justify-content-center'>
            <Row className='flex-column flex-md-row w-100'>
              {destinationGalleries.map((destinationGallery) => (
                <Col key={destinationGallery.id} className='mt-3'>
                  <Card.Img src={destinationGallery.image} />
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <FooterComponent />
    </div>
  )
}

export default DetailTourism
