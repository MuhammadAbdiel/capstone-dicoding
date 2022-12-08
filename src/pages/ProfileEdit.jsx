import React, { useEffect, useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Row, Col, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterComponent from '../components/FooterComponent'
import useInput from '../components/useInput'
import Swal from 'sweetalert2'
import { alertIfFoundMissingInput } from '../utils/alertMissingInputForm'
import { IoMdCloseCircle } from 'react-icons/io'
import { updateProfile } from '../utils/network-data'
import NotFound from '../components/NotFound'
import { getUserLogged } from '../utils/network-data'
import AppContext from '../context/AppContext'

const ProfileEdit = () => {
  const [username, handleUsernameChange] = useInput('')
  const [email, handleEmailChange] = useInput('')
  const [fullname, handleFullnameChange] = useInput('')
  const [phoneNumber, handlePhoneNumberChange] = useInput('')
  const [bankAccountNumber, handleBankAccountNumberChange] = useInput('')
  const [isEmailValid, setIsEmailValid] = useState('Not Set')
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState('Not Set')
  const { authedUser, setAuthedUser, setIsLoading } = useContext(AppContext)

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedUser(null)
    } else {
      const fetchData = async () => {
        const response = await getUserLogged()
        try {
          if (!response.error) {
            setAuthedUser(response.data.data)
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          })
        }
      }
      fetchData()
    }
  }, [])

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

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    alertIfFoundMissingInput({
      fullname,
      username,
      email,
      phoneNumber,
      bankAccountNumber,
      isPhoneNumberValid
    })

    if (
      isPhoneNumberValid === true &&
      username !== '' &&
      isEmailValid === true &&
      username !== '' &&
      phoneNumber !== '' &&
      bankAccountNumber !== ''
    ) {
      setIsLoading(true)
      const response = await updateProfile({
        name: fullname,
        username,
        email,
        phone_number: `+62${phoneNumber}`,
        bank_account_number: bankAccountNumber
      })
      try {
        if (!response.error && !response.data.errors) {
          setIsLoading(false)
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

  if (authedUser === null) {
    return <NotFound />
  }
  return (
    <>
      <div>
        <div className=' d-flex justify-content-center my-5 '>
          <Form style={{ width: '80%' }} onSubmit={onSubmitHandler} className='register-form'>
            <Form.Group className='mb-3' controlId='formFullname'>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control
                type='text'
                placeholder='Masukkan nama lengkap Anda'
                value={fullname || authedUser.name}
                onChange={handleFullnameChange}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Masukkan username Anda'
                value={username || authedUser.username}
                onChange={handleUsernameChange}
              />
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
                value={email || authedUser.email}
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
                  value={phoneNumber || (authedUser === 'Not Set' ? undefined : authedUser.phone_number.slice(3))}
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
                value={bankAccountNumber || authedUser.bank_account_number}
                onChange={handleBankAccountNumberChange}
              />
            </Form.Group>

            <Row className='justify-content-start'>
              <Col lg={2}>
                <Link to='/user/profile'>
                  <Button style={{ width: '100%', backgroundColor: '#f23030' }} className='mb-3 fw-bold' variant='danger'>
                    Kembali
                  </Button>
                </Link>
              </Col>
              <Col lg={2}>
                <Button style={{ width: '100%', backgroundColor: '#0AA1DD' }} className='mb-3 fw-bold' variant='primary' type='submit'>
                  Simpan
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
      <FooterComponent />
    </>
  )
}

export default ProfileEdit
