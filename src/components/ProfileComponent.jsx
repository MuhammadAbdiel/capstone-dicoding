import React, { useContext, useEffect } from 'react'
import { getUserLogged } from '../utils/network-data'
import logo from '../images/profile/user.png'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'
import Swal from 'sweetalert2'
import { Col, Row } from 'react-bootstrap'
import AppContext from '../context/AppContext'

const ProfileComponent = () => {
  const { authedUser, setAuthedUser } = useContext(AppContext)
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedUser(null)
    } else {
      const fetchData = async () => {
        const response = await getUserLogged()
        try {
          if (!response.error) {
            setAuthedUser(response.data.data)
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
  }, [])

  if (authedUser === null) {
    return <NotFound />
  }
  return (
    <>
      <div className='card' style={{ width: '20rem', margin: '25px auto' }}>
        <div className='card-header'>
          <img src={logo} className='card-img-top' alt='...' />
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <h4 className='text-center'>{authedUser.name}</h4>
          </li>
          <li className='list-group-item'>Username : {authedUser.username}</li>
          <li className='list-group-item'>Email : {authedUser.email}</li>
          <li className='list-group-item'>No.Telp : {authedUser.phone_number}</li>
          <li className='list-group-item'>No.Rekening : {authedUser.bank_account_number}</li>
          <br />
          <Row className='text-center'>
            <Col sm={5}>
              <Link to='/user/profile/edit'>
                <Button variant='warning'>Edit Profil</Button>
              </Link>
            </Col>
            <Col sm={7}>
              <Link to='/user/profile/change-password'>
                <Button variant='success'>Ganti Kata Sandi</Button>
              </Link>
            </Col>
          </Row>
          <br />
        </ul>
      </div>
    </>
  )
}

export default ProfileComponent
