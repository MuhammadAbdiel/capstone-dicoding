import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
// import FooterComponent from '../components/FooterComponent'
import FooterStyleComponent from '../components/FooterStyleComponent'
import HeaderComponent from '../components/HeaderComponent'
import useInput from '../components/useInput'
import Swal from 'sweetalert2'
import { IoMdCloseCircle } from 'react-icons/io'
import { register } from '../utils/network-data'
const Register = () => {
  const [fullname, handleFullnameChange] = useInput('')
  const [username, handleUsernameChange] = useInput('')
  const [email, handleEmailChange] = useInput('')
  const [phoneNumber, handlePhoneNumberChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [repassword, handleRePasswordChange] = useInput('')
  const [isEmailValid, setIsEmailValid] = useState('Not Set')
  const [isPasswordValid, setIsPasswordValid] = useState('Not Set')
  const [isBothPasswordMatch, setIsBothPasswordMatch] = useState('Not Set')
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
      setIsBothPasswordMatch('Not Set')
    }
  }, [password])
  useEffect(() => {
    if (repassword !== '' && isPasswordValid === true) {
      if (repassword === password) {
        setIsBothPasswordMatch(true)
      } else {
        setIsBothPasswordMatch(false)
      }
    } else if (repassword === '') {
      setIsBothPasswordMatch('Not Set')
    }
  }, [repassword, password])

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (isBothPasswordMatch === false) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'The confirmation password does not match'
      })
    } else if (isBothPasswordMatch === 'Not Set') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter your password!'
      })
    }
    if (isEmailValid === true && isBothPasswordMatch === true) {
      let registerStatus = await register({
        name: fullname,
        username,
        email,
        phone_number: phoneNumber,
        back_account_number: '415151351123',
        password,
        password_confirmation: repassword
      })
      console.log(registerStatus)
      console.log('registered')
    }
  }

  return (
    <>
      <HeaderComponent />
      <div>
        <div className=' d-flex justify-content-center my-5 '>
          <Form style={{ width: '80%' }} onSubmit={onSubmitHandler} className='register-form'>
            <Form.Group className='mb-3' controlId='formFullname'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type='text' placeholder='Enter your full name' value={fullname} onChange={handleFullnameChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Enter your username' value={username} onChange={handleUsernameChange} />
            </Form.Group>
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

            <Form.Group className='mb-3' controlId='formPhoneNumber'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type='text' placeholder='Enter your full name' value={phoneNumber} onChange={handlePhoneNumberChange} />
            </Form.Group>

            <Form.Group
              className='mb-3 '
              controlId='formPassword'
              value={password}
              onChange={handlePasswordChange}
              title={isPasswordValid === false ? 'Your password must containt at least 8 characters' : undefined}
            >
              <Form.Label>
                Password
                {isPasswordValid === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <Form.Control type='password' placeholder='Enter your Password' className={isPasswordValid === false && 'invalid'} />
            </Form.Group>

            <Form.Group
              className='mb-3 '
              controlId='formRePassword'
              title={isBothPasswordMatch === false ? 'The confirmation password does not match' : undefined}
            >
              <Form.Label>
                Reenter Password
                {isBothPasswordMatch === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your Reenter Password'
                value={repassword}
                onChange={handleRePasswordChange}
                className={isBothPasswordMatch === false && 'invalid'}
              />
            </Form.Group>

            <Button style={{ width: '100%', backgroundColor: '#0AA1DD' }} className='mb-3 fw-bold' variant='primary' type='submit'>
              Register
            </Button>
            <p className='text-center'>
              Already have an account? <Link to='/login'> Login here</Link>
            </p>
          </Form>
        </div>
      </div>
      <FooterStyleComponent />
    </>
  )
}

export default Register
