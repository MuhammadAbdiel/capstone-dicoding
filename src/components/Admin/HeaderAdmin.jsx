import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import Swal from 'sweetalert2'
import { logoutAdmin } from '../../utils/network-data'
import AppContext from '../../context/AppContext'

const HeaderAdmin = ({ active, setActive }) => {
  const { setAuthedUser, isAdmin, setIsAdmin, setIsLoading } = useContext(AppContext)
  const navigate = useNavigate()

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
        setIsLoading(true)
        const response = await logoutAdmin()
        try {
          if (!response.error) {
            setIsLoading(false)
            setAuthedUser(null)
            setIsAdmin(false)
            localStorage.removeItem('accessToken')
            navigate('/')
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
  useEffect(() => {
    if (!isAdmin) {
      navigate('/')
    }
  }, [])
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
          {isAdmin && (
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
