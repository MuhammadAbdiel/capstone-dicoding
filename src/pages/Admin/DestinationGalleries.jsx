import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
import { AiFillDelete, AiFillFileAdd } from 'react-icons/ai'
import { deleteDestinationGallery, getAllDestinationGalleries } from '../../utils/network-data'
import LoadingIndicatorComponent from '../../components/LoadingIndicatorComponent'
import CreateDestinationGalleryModal from '../../components/Admin/CreateDestinationGalleryModal'
import Swal from 'sweetalert2'

const DestinationGalleries = () => {
  const [destinationGalleries, setDestinationGalleries] = useState([])
  const [isModalNewDestinationGallery, setIsModalNewDestinationGallery] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleCloseModalNewDestinationGallery = () => setIsModalNewDestinationGallery(false)

  const handleDelete = async (destinationGallery) => {
    Swal.fire({
      title: 'Are you sure you want to delete this image?',
      text: destinationGallery.image,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDestinationGallery(destinationGallery.id)
        try {
          initData()
        } catch (e) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
      }
    })
  }

  const initData = () => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await getAllDestinationGalleries()
      try {
        if (!response.error) {
          setIsLoading(false)
          setDestinationGalleries(response.data.data)
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
    <Container>
      {isLoading && <LoadingIndicatorComponent />}
      <LayoutAdmin />
      <h1 className='text-center'>Destination Gallery</h1>
      <div className='d-flex px-3 pb-5 flex-wrap'>
        {destinationGalleries.map((destinationGallery) => (
          <Col key={destinationGallery.id} className='my-3 px-3' lg={4} md={4} sm={6}>
            <Card className='h-100'>
              <Card.Img variant='top' src={destinationGallery.image} />
              <Card.Body>
                <div className='d-flex justify-content-end'>
                  <Button variant='danger' type='button' onClick={() => handleDelete(destinationGallery)}>
                    <AiFillDelete color='white' />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
      <button className='floating' onClick={() => setIsModalNewDestinationGallery(true)}>
        <AiFillFileAdd size={30} />
      </button>
      {isModalNewDestinationGallery && (
        <CreateDestinationGalleryModal handleClose={handleCloseModalNewDestinationGallery} fetchNewDestinationGallery={initData} />
      )}
    </Container>
  )
}

export default DestinationGalleries
