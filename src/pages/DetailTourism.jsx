import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import Card from 'react-bootstrap/Card'
// import logo from '../images/logo192.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import { getDestinationById } from '../utils/network-data'

const DetailTourism = () => {
  const [destination, setDestination] = useState({})
  const [destinationGalleries, setDestinationGalleries] = useState([])
  const { id } = useParams()

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
    }

    fetchData()
  }, [id])

  return (
    <div>
      <HeaderComponent />
      <Card>
        <Card.Body>
          <Card.Title className='d-flex justify-content-center fw-bold'>
            <h1>{destination.name}</h1>
          </Card.Title>
          <Container>
            <Row>
              <Col className='mt-3'>
                <Card className='p-5'>
                  <Card.Text>
                    <h3>Description :</h3>
                    <p>{destination.description}</p>
                  </Card.Text>
                </Card>
              </Col>
              <Col className='mt-3'>
                <Card className='p-5'>
                  <Card.Text>
                    <p>Name : {destination.name}</p>
                    <p>Open Time : {destination.open_time}</p>
                    <p>Close Time : {destination.close_time}</p>
                    <p>Ticket Price : {destination.price}</p>
                    <p>Rating : {destination.rating}</p>
                    <p>Location : {destination.location}</p>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>

        <Card.Body>
          <Card.Title className='d-flex justify-content-center'></Card.Title>
          <Container className='d-flex justify-content-center'>
            <Row>
              {destinationGalleries.map((destinationGallery) => (
                <Col key={destinationGallery.id} xs={6} lg={4} md={6} className='mt-3'>
                  <Card.Img variant='top' height={250} width={300} src={destinationGallery.image} />
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
