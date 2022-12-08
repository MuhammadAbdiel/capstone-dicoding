import React, { useEffect, useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../components/useInput'
import Swal from 'sweetalert2'
import { alertIfFoundMissingInput } from '../../utils/alertMissingInputForm'
import { IoMdCloseCircle } from 'react-icons/io'
import { putAccessToken, registerAdmin } from '../../utils/network-data'
import FooterComponent from '../../components/FooterComponent'
import AppContext from '../../context/AppContext'

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
  const { setIsLoading } = useContext(AppContext)
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
      setIsLoading(true)
      const response = await registerAdmin({
        name: fullname,
        username,
        email,
        phone_number: `+62${phoneNumber}`,
        bank_account_number: bankAccountNumber,
        password,
        password_confirmation: repassword
      })
      try {
        if (!response.error && !response.data.errors) {
          setIsLoading(false)
          putAccessToken(response.data.access_token)
          navigate('/admin')
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
      <div>
        <h1 className='text-center'>Daftar sebagai Admin</h1>
        <div className=' d-flex justify-content-center my-5 '>
          <Form style={{ width: '80%' }} onSubmit={onSubmitHandler} className='register-form'>
            <Form.Group className='mb-3' controlId='formFullname'>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type='text' placeholder='Masukkan nama lengkap Anda' value={fullname} onChange={handleFullnameChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Masukkan username Anda' value={username} onChange={handleUsernameChange} />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formEmail'
              title={isEmailValid === false ? 'Masukkan alamat email Anda yang valid' : undefined}
            >
              <Form.Label>
                Alamat email
                {isEmailValid === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <Form.Control
                type='email'
                placeholder='Masukkan alamat email Anda'
                value={email}
                onChange={handleEmailChange}
                className={isEmailValid === false && 'invalid'}
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formPhoneNumber'
              title={isPhoneNumberValid === false ? 'Nomor telepon harus berisi setidaknya 10 digit' : undefined}
            >
              <Form.Label>
                No.Telepon
                {isPhoneNumberValid === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <InputGroup className='mb-3'>
                <InputGroup.Text id='basic-addon1'>+62</InputGroup.Text>
                <Form.Control
                  type='number'
                  placeholder='Masukkan nomor telepon Anda'
                  value={phoneNumber}
                  min='0'
                  onChange={handlePhoneNumberChange}
                  className={isPhoneNumberValid === false && 'invalid'}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBankAccountNumber'>
              <Form.Label>No.Rekening</Form.Label>
              <Form.Control
                type='text'
                placeholder='Masukkan nomor rekening Anda'
                value={bankAccountNumber}
                onChange={handleBankAccountNumberChange}
              />
            </Form.Group>

            <Form.Group
              className='mb-3 '
              controlId='formPassword'
              value={password}
              onChange={handlePasswordChange}
              title={isPasswordValid === false ? 'Kata sandi Anda harus berisi setidaknya 8 karakter' : undefined}
            >
              <Form.Label>
                Kata Sandi
                {isPasswordValid === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <Form.Control type='password' placeholder='Masukkan Kata Sandi Anda' className={isPasswordValid === false && 'invalid'} />
            </Form.Group>

            <Form.Group
              className='mb-3 '
              controlId='formRePassword'
              title={isBothPasswordMatch === false ? 'Konfirmasi kata sandi tidak sesuai' : undefined}
            >
              <Form.Label>
                Konfirmasi Kata Sandi
                {isBothPasswordMatch === false && <IoMdCloseCircle color='red' />}
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Masukkan Konfirmasi Kata Sandi Anda'
                value={repassword}
                onChange={handleRePasswordChange}
                className={isBothPasswordMatch === false && 'invalid'}
              />
            </Form.Group>

            <Button style={{ width: '100%', backgroundColor: '#0AA1DD' }} className='mb-3 fw-bold' variant='primary' type='submit'>
              Daftar
            </Button>
            <p className='text-center'>
              Sudah mempunyai akun? <Link to='/admin/login'> Login disini</Link>
            </p>
          </Form>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default Register
