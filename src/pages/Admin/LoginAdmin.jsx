import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, useNavigate } from 'react-router-dom'
import FooterComponent from '../../components/FooterComponent'
import useInput from '../../components/useInput'
import { loginAdmin, putAccessToken } from '../../utils/network-data'
import { IoMdCloseCircle } from 'react-icons/io'
import { alertIfFoundMissingInput } from '../../utils/alertMissingInputForm'
import LoadingIndicatorComponent from '../../components/LoadingIndicatorComponent'
import Swal from 'sweetalert2'
import LayoutAdmin from '../../components/Admin/LayoutAdmin'
// import FooterComponent from '../components/FooterComponent'

const LoginAdmin = () => {
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
      const response = await loginAdmin({ email, password })
      try {
        if (!response.error && !response.data.message) {
          setIsLoading(false)
          putAccessToken(response.data.access_token)
          navigate('/admin')
        } else {
          setIsLoading(false)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email atau password salah!'
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
      <LayoutAdmin />
      <div className=' d-flex justify-content-center my-5 '>
        <Form style={{ width: '80%' }} onSubmit={onSubmitHandler}>
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
            controlId='formPassword'
            title={isPasswordValid === false ? 'Kata sandi harus berisi setidaknya 8 karakter' : undefined}
          >
            <Form.Label>
              Kata Sandi
              {isPasswordValid === false && <IoMdCloseCircle color='red' />}
            </Form.Label>
            <Form.Control
              type='password'
              placeholder='Masukkan Kata Sandi Anda'
              value={password}
              onChange={handlePasswordChange}
              className={isPasswordValid === false && 'invalid'}
            />
          </Form.Group>

          <Button style={{ width: '100%', backgroundColor: '#0AA1DD' }} className='mb-3 fw-bold' variant='primary' type='submit'>
            Login
          </Button>
          <p className='text-center'>
            Tidak punya akun? <Link to='/admin/register'> Daftar disini</Link>
          </p>
        </Form>
      </div>
      <FooterComponent />
    </>
  )
}

export default LoginAdmin
