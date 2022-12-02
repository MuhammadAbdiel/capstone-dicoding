import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import FooterComponent from '../components/FooterComponent'
import FooterStyleComponent from '../components/FooterStyleComponent'
import HeaderComponent from '../components/HeaderComponent'
import useInput from '../components/useInput'
import Swal from 'sweetalert2'
import { alertIfFoundMissingInput } from '../utils/alertMissingInputForm'
import { IoMdCloseCircle } from 'react-icons/io'
import { putAccessToken, register } from '../utils/network-data'
import LoadingIndicatorComponent from '../components/LoadingIndicatorComponent'
const Register = () => {
  const navigate = useNavigate()
  const [fullname, handleFullnameChange] = useInput('')
  const [username, handleUsernameChange] = useInput('')
  const [email, handleEmailChange] = useInput('')
  const [phoneNumber, handlePhoneNumberChange] = useInput('')
  const [bankAccountNumber, handleBankAccountNumberChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [repassword, handleRePasswordChange] = useInput('')
  const [isEmailValid, setIsEmailValid] = useState('Not Set')
  const [isPasswordValid, setIsPasswordValid] = useState('Not Set')
  const [isBothPasswordMatch, setIsBothPasswordMatch] = useState('Not Set')
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState('Not Set')
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
    if (phoneNumber !== '') {
      if (phoneNumber.length >= 9) {
        setIsPhoneNumberValid(true)
      } else {
        setIsPhoneNumberValid(false)
      }
    } else if (phoneNumber === '') {
      setIsPhoneNumberValid('Not Set')
    }
  }, [phoneNumber])
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
    alertIfFoundMissingInput({
      fullname,
      username,
      email,
      phoneNumber,
      bankAccountNumber,
      isPhoneNumberValid,
      isPasswordValid,
      isBothPasswordMatch
    })

    if (
      isPhoneNumberValid === true &&
      isEmailValid === true &&
      isBothPasswordMatch === true &&
      fullname !== '' &&
      username !== '' &&
      phoneNumber !== '' &&
      bankAccountNumber !== '' &&
      password !== '' &&
      repassword !== ''
    ) {
      const response = await register({
        name: fullname,
        username,
        email,
        phone_number: `+62${phoneNumber}`,
        bank_account_number: bankAccountNumber,
        password,
        password_confirmation: repassword
      })
      setIsLoading(true)
      try {
        if (!response.error && !response.data.errors) {
          setIsLoading(false)
          putAccessToken(response.data.access_token)
          navigate('/')
        } else {
          setIsLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Invalid',
            text: response.data.errors[Object.keys(response.data.errors)[0]]
          })
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

            <Form.Group
              className='mb-3'
              controlId='formPhoneNumber'
              title={isPhoneNumberValid === false ? 'Phone number must contain at least 10 digit number' : undefined}
            >
              <Form.Label>
                Phone Number
                {isPhoneNumberValid === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <InputGroup className='mb-3'>
                <InputGroup.Text id='basic-addon1'>+62</InputGroup.Text>
                <Form.Control
                  type='number'
                  placeholder='Enter your phone number'
                  value={phoneNumber}
                  min='0'
                  onChange={handlePhoneNumberChange}
                  className={isPhoneNumberValid === false && 'invalid'}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBankAccountNumber'>
              <Form.Label>Bank Account Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your bank account number'
                value={bankAccountNumber}
                onChange={handleBankAccountNumberChange}
              />
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
      {isLoading && <LoadingIndicatorComponent />}
    </>
  )
}

export default Register
