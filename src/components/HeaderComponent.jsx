import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { getUserLogged, logout } from '../utils/network-data'
import LoadingIndicatorComponent from './LoadingIndicatorComponent'

const HeaderComponent = () => {
  const [authedUser, setAuthedUser] = useState(null)
  const [name, setName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedUser(null)
      setName('')
      setIsLoading(false)
    } else {
      const fetchData = async () => {
        setIsLoading(true)
        const response = await getUserLogged()
        try {
          if (!response.error) {
            setIsLoading(false)

            setAuthedUser(response.data.data)
            setName(response.data.data.name)
          }
        } catch (error) {
          setIsLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          })
        }

        if (response.data.data.role === 'admin') {
          setIsAdmin(true)
        }
      }

      fetchData()
    }
  }, [])

  const handleLogout = async () => {
    Swal.fire({
      title: 'Apakah anda yakin ?',
      text: 'Anda akan keluar dari akun Anda!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, keluar!',
      cancelButtonText: 'Tidak, batalkan!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true)
        const response = await logout()
        try {
          if (!response.error) {
            setIsLoading(false)
            localStorage.removeItem('accessToken')
            navigate('/login')
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
      <Navbar collapseOnSelect expand='lg' style={{ backgroundColor: '#0AA1DD' }} variant='dark' className='py-3'>
        <Container>
          <Navbar.Brand>
            <Link className='text-decoration-none text-white' to='/'>
              GoWisata
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto header-link'>
              <Link className='nav-link mx-3 px-3' to='/articles'>
                Artikel
              </Link>
              <Link className='nav-link mx-3 px-3' to='/tourism'>
                Jelajahi
              </Link>
              {/* Link explore nih bisa dimanfaatkan sebagai halaman yang memberikan rekomendasi tempat wisata (Semacam pages explore instagram) */}
              {authedUser != null && (
                <Link to='/user/booking' className='nav-link mx-3 px-3'>
                  Pesanan Saya
                </Link>
              )}
              <Link className='nav-link mx-3 px-3' to='/about'>
                Tentang Kami
              </Link>
              {authedUser != null ? (
                <NavDropdown title={name} id='collasible-nav-dropdown' className='header-link'>
                  <Link className='dropdown-item' to='/user/profile'>
                    Profil
                  </Link>
                  {isAdmin && (
                    <Link className='dropdown-item' to='/admin'>
                      Admin
                    </Link>
                  )}
                  <Link className='dropdown-item' to='/user/saved'>
                    Tersimpan
                  </Link>
                  <NavDropdown.Divider />
                  <Link className='dropdown-item' onClick={handleLogout}>
                    Logout
                  </Link>
                </NavDropdown>
              ) : (
                <Link to='/login' className='nav-link mx-3 px-3'>
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComponent
