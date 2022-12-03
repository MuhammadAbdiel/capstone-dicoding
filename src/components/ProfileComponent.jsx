import React, { useState, useEffect } from 'react'
import { getUserLogged } from '../utils/network-data'
import logo from '../images/logo192.png'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'

const ProfileComponent = () => {
  const [authedUser, setAuthedUser] = useState(null)
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedUser(null)
    } else {
      const fetchData = async () => {
        const response = await getUserLogged()
        setAuthedUser(response.data.data)
      }
      fetchData()
    }
  }, [])
  if (authedUser === null) {
    return <NotFound />
  }
  return (
    <div>
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
          <li className='list-group-item'>Bank Account Number : {authedUser.bank_account_number}</li>
          <div className='position-relative'></div>
          <div className='d-flex justify-content-center'>
            <Link to='/user/profile/edit'>
              <Button variant='warning m-2'>Edit</Button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default ProfileComponent
