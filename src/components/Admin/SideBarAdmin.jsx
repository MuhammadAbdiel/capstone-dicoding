import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUserLogged } from '../../utils/network-data'

const SideBarAdmin = ({ active }) => {
  const [authedUser, setAuthedUser] = useState({})

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

  return (
    <div
      style={{ backgroundColor: '#0AA1DD' }}
      className={active ? 'sidebar_active vertical-nav bg-white' : 'vertical-nav bg-white sidebar'}
    >
      <div className='py-3 px-3 mb-4' style={{ backgroundColor: '#0AA1DD' }}>
        <div className='media d-flex align-items-center' style={{ height: '38px' }}>
          <div className='media-body text-white'>
            <h4 className='m-0'>{authedUser.name}</h4>
          </div>
        </div>
      </div>
      <p className='text-grey fw-bold text-uppercase px-3 small py-4 mb-0'>dashboard</p>
      <ul className='nav flex-column bg-white mb-0'>
        <li className='nav-item'>
          <Link className='nav-link text-dark' to='/admin/'>
            Dashboard Admin
          </Link>
        </li>
      </ul>
      <ul className='nav flex-column bg-white mb-0'>
        <li className='nav-item'>
          <Link className='nav-link text-dark' to='/admin/articles'>
            Article
          </Link>
        </li>
      </ul>
      <ul className='nav flex-column bg-white mb-0'>
        <li className='nav-item'>
          <Link className='nav-link text-dark' to='/admin/categories'>
            Category
          </Link>
        </li>
      </ul>
      <ul className='nav flex-column bg-white mb-0'>
        <li className='nav-item'>
          <Link className='nav-link text-dark' to='/admin/tourism'>
            Tourism
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarAdmin
