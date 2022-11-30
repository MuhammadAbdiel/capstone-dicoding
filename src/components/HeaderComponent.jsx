import React from 'react'
import Swal from 'sweetalert2'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../utils/network-data'

const HeaderComponent = ({ isUserLogged = true }) => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await logout()
        try {
          if (!response.error) {
            navigate('/')
          }
        } catch (e) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: e
          })
        }
        localStorage.removeItem('accessToken')
      }
    })
  }

  return (
    <Navbar collapseOnSelect expand='md' style={{ backgroundColor: '#0AA1DD' }} variant='dark' className='py-3'>
      <Container>
        <Navbar.Brand>
          <Link className='text-decoration-none text-white' to='/'>
            Navbar
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto header-link'>
            <Nav.Link className='mx-3' href='/articles'>
              Article
            </Nav.Link>
            <Nav.Link className='mx-3' href='/tourism'>
              Explore
            </Nav.Link>
            {/* Link explore nih bisa dimanfaatkan sebagai halaman yang memberikan rekomendasi tempat wisata (Semacam pages explore instagram) */}
            <Nav.Link href='./my-booking' className='mx-3'>
              My Booking
            </Nav.Link>
            {isUserLogged ? (
              <NavDropdown title='Username' id='collasible-nav-dropdown' className='ms-3 header-link'>
                <NavDropdown.Item href='/user/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item href='/admin'>Admin</NavDropdown.Item>
                <NavDropdown.Item href='/user/saved'>Saved</NavDropdown.Item>
                <NavDropdown.Item href='/user/setting'>Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href='./login' className='mx-3'>
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

HeaderComponent.propTypes = {
  isUserLogged: PropTypes.bool
}
export default HeaderComponent
