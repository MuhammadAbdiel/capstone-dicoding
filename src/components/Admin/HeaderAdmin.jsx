import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import Swal from 'sweetalert2'
import { getUserLoggedAdmin, logoutAdmin } from '../../utils/network-data'

const HeaderAdmin = ({ active, setActive }) => {
  const [authedAdmin, setAuthedAdmin] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedAdmin(null)
    } else {
      const fetchData = async () => {
        const response = await getUserLoggedAdmin()
        try {
          if (!response.error) {
            setAuthedAdmin(response.data.data)
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

  const handleLogout = async () => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda akan keluar dari akun ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, keluar!',
      cancelButtonText: 'Tidak'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await logoutAdmin()
        try {
          if (!response.error) {
            localStorage.removeItem('accessToken')
            navigate('/')
          }
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

  return (
    <>
      <header style={{ backgroundColor: '#0AA1DD', zIndex: '1' }} className={active ? 'sidebar_active p-3' : 'p-3 sidebar'}>
        <div className='d-flex justify-content-between w-100 nav-link-admin'>
          <button
            id='sidebarCollapse'
            type='button'
            className='btn fw-bold px-3 py-2'
            onClick={() => {
              setActive(!active)
            }}
          >
            <i>
              <FaBars />
            </i>
          </button>
          {authedAdmin != null && (
            <button onClick={handleLogout} className='btn px-3 py-2'>
              <FiLogOut size={20} className='me-2' />
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  )
}

export default HeaderAdmin
