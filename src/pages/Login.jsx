import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import HeaderComponent from '../components/HeaderComponent'
import { Link, useNavigate } from 'react-router-dom'
import FooterStyleComponent from '../components/FooterStyleComponent'
import useInput from '../components/useInput'
import { login, putAccessToken } from '../utils/network-data'
// import FooterComponent from '../components/FooterComponent'

const Login = () => {
  const navigate = useNavigate()
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    const response = await login({ email, password })
    console.log(response)
    try {
      if (!response.error) {
        putAccessToken(response.data.access_token)
        navigate('/')
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      })
    }
  }

  return (
    <>
      <HeaderComponent />
      <div className=' d-flex justify-content-center my-5 '>
        <Form style={{ width: '80%' }} onSubmit={onSubmitHandler}>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter your email' value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Form.Group className='mb-3 ' controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter your Password' value={password} onChange={handlePasswordChange} />
          </Form.Group>

          <Button style={{ width: '100%', backgroundColor: '#0AA1DD' }} className='mb-3 fw-bold' variant='primary' type='submit'>
            Login
          </Button>
          <p className='text-center'>
            Don't have an account? <Link to='/register'> Register here</Link>
          </p>
        </Form>
      </div>
      <FooterStyleComponent />
    </>
  )
}

export default Login
