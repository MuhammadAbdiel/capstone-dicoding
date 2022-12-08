import React, { useState, useEffect, useContext } from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import { getAllDestinations } from '../../utils/network-data'
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap'
import CardDestinationAdmin from '../../components/Admin/CardDestinationAdmin'
import CreateDestinationModal from '../../components/Admin/CreateDestinationModal'
import EditDestinationModal from '../../components/Admin/EditDestinationModal'
import AppContext from '../../context/AppContext'

const Tourism = () => {
  const [destinations, setDestinations] = useState([])
  const [idDestination, setIdDestination] = useState(0)
  const [isModalNewDestination, setIsModalNewDestination] = useState(false)
  const [isModalEditDestination, setIsModalEditDestination] = useState(false)
  const { setIsLoading } = useContext(AppContext)
  const handleCloseModalNewDestination = () => setIsModalNewDestination(false)
  const handleCloseModalEditDestination = () => setIsModalEditDestination(false)

  const handleShowModalEditDestination = (id) => {
    setIsModalEditDestination(true)
    setIdDestination(id)
  }

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
    <Container>
      <h1 className='text-center'>Destinasi</h1>
      <div className='d-flex px-3 pb-5 flex-wrap'>
        {destinations.map((destination) => (
          <CardDestinationAdmin
            key={destination.id}
            handleShowModalEdit={handleShowModalEditDestination}
            destination={destination}
            refreshDestination={initData}
          />
        ))}
      </div>
      <button className='floating' onClick={() => setIsModalNewDestination(true)}>
        <AiFillFileAdd size={30} />
      </button>
      {isModalNewDestination && <CreateDestinationModal handleClose={handleCloseModalNewDestination} fetchNewDestination={initData} />}
      {isModalEditDestination && (
        <EditDestinationModal id={idDestination} handleClose={handleCloseModalEditDestination} fetchNewDestination={initData} />
      )}
    </Container>
  )
}

export default Tourism
