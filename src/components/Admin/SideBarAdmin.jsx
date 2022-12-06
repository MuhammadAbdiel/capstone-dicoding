import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUserLogged, logoutAdmin } from '../../utils/network-data'
import LoadingIndicatorComponent from '../LoadingIndicatorComponent'
import Swal from 'sweetalert2'

const SideBarAdmin = ({ active }) => {
  const [authedAdmin, setAuthedAdmin] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedAdmin(null)
      setIsLoading(false)
    } else {
      const fetchData = async () => {
        setIsLoading(true)
        const response = await getUserLogged()
        try {
          if (!response.error) {
            setIsLoading(false)
            setAuthedAdmin(response.data.data)
          }
        } catch (e) {
          setIsLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
      }

      fetchData()
    }
  }, [])

  const handleLogout = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true)
        const response = await logoutAdmin()
        try {
          if (!response.error) {
            setIsLoading(false)
            localStorage.removeItem('accessToken')
            navigate('/admin/login')
          }
        } catch (e) {
          setIsLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
      }
    })
  }

  return (
    <>
      {isLoading && <LoadingIndicatorComponent />}
      <div
        style={{ backgroundColor: '#0AA1DD', zIndex: '1' }}
        className={active ? 'sidebar_active vertical-nav bg-white' : 'vertical-nav bg-white sidebar'}
      >
        <div className='py-3 px-3 mb-4' style={{ backgroundColor: '#0AA1DD' }}>
          <div className='media d-flex align-items-center' style={{ height: '38px' }}>
            <div className='media-body text-white'>{authedAdmin !== null && <h4 className='m-0'>{authedAdmin.name}</h4>}</div>
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
            <Link className='nav-link text-dark' to='#'>
              Article Gallery
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='#'>
              Article Comment
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
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='#'>
              Tourism Gallery
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='#'>
              Transaction
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBarAdmin
