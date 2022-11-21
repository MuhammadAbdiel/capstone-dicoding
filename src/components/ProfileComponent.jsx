import React from 'react'
import logo from '../images/logo192.png'
const ProfileComponent = () => {
  return (
    <div>
      <div className='card' style={{ width: '20rem', margin: '25px auto' }}>
        <div className='card-header'>
          <img src={logo} className='card-img-top' alt='...' />
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>An item</li>
          <li className='list-group-item'>A second item</li>
          <li className='list-group-item'>A third item</li>
          <li className='list-group-item'>A third item</li>
          <li className='list-group-item'>A third item</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileComponent
