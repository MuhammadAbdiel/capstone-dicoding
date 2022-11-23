import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import PropTypes from 'prop-types'

const HeaderComponent = ({ isUserLogged = true }) => {
  return (
    <Navbar collapseOnSelect expand='sm' style={{ backgroundColor: '#0AA1DD' }} variant='dark' className='py-3'>
      <Container>
        <Navbar.Brand href='./'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='./explore' className='mx-3'>
              Explore
            </Nav.Link>{' '}
            {/* Link explore nih bisa dimanfaatkan sebagai halaman yang memberikan rekomendasi tempat wisata (Semacam pages explore instagram) */}
            <Nav.Link href='./my-booking' className='mx-3'>
              My Booking
            </Nav.Link>
            {isUserLogged ? (
              <NavDropdown title='Username' id='collasible-nav-dropdown' className='ms-3'>
                <NavDropdown.Item href='/user/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item href='/user/saved'>Saved</NavDropdown.Item>
                <NavDropdown.Item href='/user/setting'>Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='./'>Logout</NavDropdown.Item>
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