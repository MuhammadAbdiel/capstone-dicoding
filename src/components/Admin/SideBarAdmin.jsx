import React from 'react'
import { Link } from 'react-router-dom'

const SideBarAdmin = ({ active }) => {
  return (
    <div
      style={{ backgroundColor: '#0AA1DD' }}
      className={active ? 'sidebar_active vertical-nav bg-white' : 'vertical-nav bg-white sidebar'}
    >
      <div className='py-4 px-3 mb-4' style={{ backgroundColor: '#0AA1DD' }}>
        <div className='media d-flex align-items-center'>
          <div className='media-body text-white'>
            <h4 className='m-0'>Admin Name</h4>
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
            Toursim
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarAdmin
