import React, { useContext } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import FooterStyleComponent from '../components/FooterStyleComponent'
import useInput from '../components/useInput'
import Swal from 'sweetalert2'
import { changePassword } from '../utils/network-data'
import AppContext from '../context/AppContext'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useInput('')
  const [newPassword, setNewPassword] = useInput('')
  const [confirmPassword, setConfirmPassword] = useInput('')
  const { setIsLoading } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
      Swal.fire({
        icon: 'error',
        title: 'There is empty input field',
        text: 'Please fill all input fields'
      })
    } else {
      if (newPassword === confirmPassword) {
        setIsLoading(true)

        await changePassword({
          old_password: oldPassword,
          password: newPassword,
          password_confirmation: confirmPassword
        })

        try {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your password has been changed'
          })
          setIsLoading(false)
          navigate('/user/profile')
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          })
          setIsLoading(false)
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong!',
          text: 'New Password and Confirm Password are not match'
        })
      }
    }
  }

  return (
    <>
      <div>
        <h3 className='text-center mt-3'>Ganti Kata Sandi</h3>
        <div className=' d-flex justify-content-center my-5 '>
          <Form style={{ width: '80%' }} onSubmit={onSubmitHandler} className='register-form'>
            <Form.Group className='mb-3' controlId='formOldPassword'>
              <Form.Label>Kata sandi saat ini</Form.Label>
              <Form.Control type='password' placeholder='Masukkan kata sandi saat ini' value={oldPassword} onChange={setOldPassword} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formNewPassword'>
              <Form.Label>Kata sandi baru</Form.Label>
              <Form.Control type='password' placeholder='Masukkan kata sandi baru' value={newPassword} onChange={setNewPassword} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formConfirmPassword'>
              <Form.Label>Konfirmasi kata sandi</Form.Label>
              <Form.Control
                type='password'
                placeholder='Masukkan konfirmasi kata sandi'
                value={confirmPassword}
                onChange={setConfirmPassword}
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
      <FooterStyleComponent />
    </>
  )
}

export default ChangePassword
