import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logoutAdmin } from '../../utils/network-data'
import Swal from 'sweetalert2'
import AppContext from '../../context/AppContext'

const SideBarAdmin = ({ active }) => {
  const { authedUser, setAuthedUser, isAdmin, setIsAdmin, setIsLoading } = useContext(AppContext)
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

  return (
    <>
      <div
        style={{ backgroundColor: '#0AA1DD', zIndex: '1' }}
        className={active ? 'sidebar_active vertical-nav bg-white' : 'vertical-nav bg-white sidebar'}
      >
        <div className='py-3 px-3 mb-4' style={{ backgroundColor: '#0AA1DD' }}>
          <div className='media d-flex align-items-center' style={{ height: '40px' }}>
            <div className='media-body text-white'>{isAdmin && <h4 className='m-0'>{authedUser.name}</h4>}</div>
          </div>
        </div>
        <p className='text-grey fw-bold text-uppercase px-3 small py-4 mb-0'>dashboard</p>
        <hr />
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/'>
              Admin Dashboard
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/articles'>
              Artikel
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/article_galleries'>
              Galeri Artikel
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/article_comments'>
              Komentar Artikel
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/categories'>
              Kategori
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/tourism'>
              Destinasi Wisata
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/tourism_galleries'>
              Galeri Destinasi Wisata
            </Link>
          </li>
        </ul>
        <ul className='nav flex-column bg-white mb-0'>
          <li className='nav-item'>
            <Link className='nav-link text-dark' to='/admin/transactions'>
              Transaksi
            </Link>
          </li>
        </ul>
        <hr />
        {isAdmin && (
          <ul className='nav flex-column bg-white mb-0'>
            <li className='nav-item'>
              <Link className='nav-link text-dark' onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  )
}

export default SideBarAdmin
