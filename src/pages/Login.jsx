import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import HeaderComponent from '../components/HeaderComponent'
import { Link, useNavigate } from 'react-router-dom'
import FooterStyleComponent from '../components/FooterStyleComponent'
import useInput from '../components/useInput'
import { login, putAccessToken } from '../utils/network-data'
import { IoMdCloseCircle } from 'react-icons/io'
import { alertIfFoundMissingInput } from '../utils/alertMissingInputForm'
import LoadingIndicatorComponent from '../components/LoadingIndicatorComponent'
import Swal from 'sweetalert2'
// import FooterComponent from '../components/FooterComponent'

const Login = () => {
  const navigate = useNavigate()
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [isEmailValid, setIsEmailValid] = useState('Not Set')
  const [isPasswordValid, setIsPasswordValid] = useState('Not Set')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (email !== '') {
      if (/\S+@\S+\.\S+/.test(email)) {
        setIsEmailValid(true)
      } else {
        setIsEmailValid(false)
      }
    } else if (email === '') {
      setIsEmailValid('Not Set')
    }
  }, [email])

  useEffect(() => {
    if (password !== '') {
      if (password.length >= 8) {
        setIsPasswordValid(true)
      } else {
        setIsPasswordValid(false)
      }
    } else if (password === '') {
      setIsPasswordValid('Not Set')
    }
  }, [password])

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (email !== '' && password !== '' && isEmailValid && isPasswordValid) {
      setIsLoading(true)
      const response = await login({ email, password })
      try {
        if (!response.error && !response.data.message) {
          setIsLoading(false)
          putAccessToken(response.data.access_token)
          navigate('/')
        } else {
          setIsLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Your email address or password is incorrect'
          })
        }
      } catch (error) {
        setIsLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error
        })
      }
    } else if (email === '' || password === '' || !isPasswordValid) {
      alertIfFoundMissingInput({ email, password, isPasswordValid })
    }
  }

  return (
    <>
      {isLoading && <LoadingIndicatorComponent />}
      <HeaderComponent />
      <div className=' d-flex justify-content-center my-5 '>
        <Form style={{ width: '80%' }} onSubmit={onSubmitHandler}>
          <Form.Group
            className='mb-3'
            controlId='formEmail'
            title={isEmailValid === false ? 'Please enter valid email address' : undefined}
          >
            <Form.Label>
              Email address
              {isEmailValid === false && <IoMdCloseCircle color='red' />}
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
              className={isEmailValid === false && 'invalid'}
            />
          </Form.Group>

          <Form.Group
            className='mb-3'
            controlId='formPassword'
            title={isPasswordValid === false ? 'Your password must containt at least 8 characters' : undefined}
          >
            <Form.Label>
              Password
              {isPasswordValid === false && <IoMdCloseCircle color='red' />}
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter your Password'
              value={password}
              onChange={handlePasswordChange}
              className={isPasswordValid === false && 'invalid'}
            />
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
