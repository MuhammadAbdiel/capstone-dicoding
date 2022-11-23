import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
// import FooterComponent from '../components/FooterComponent'
import FooterStyleComponent from '../components/FooterStyleComponent'
import HeaderComponent from '../components/HeaderComponent'
import useInput from '../components/useInput'

const Register = () => {
  const [username, handleUsernameChange] = useInput('')
  const [email, handleEmailChange] = useInput('')
  const [password, handlePasswordChange] = useInput('')
  const [repassword, handleRePasswordChange] = useInput('')
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    console.log('register here')
  }
  return (
    <>
      <HeaderComponent />
      <div>
        <div className=' d-flex justify-content-center my-5 '>
          <Form style={{ width: '80%' }} onSubmit={onSubmitHandler}>
            <Form.Group className='mb-3' controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Enter your username' value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter your email' value={email} onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group className='mb-3 ' controlId='formPassword' value={password} onChange={handlePasswordChange}>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Enter your Password' />
            </Form.Group>

            <Form.Group className='mb-3 ' controlId='formRePassword'>
              <Form.Label>Reenter Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter your Reenter Password'
                value={repassword}
                onChange={handleRePasswordChange}
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
