import Swal from 'sweetalert2'

const alertIfFoundMissingInput = ({
  fullname,
  username,
  email,
  phoneNumber,
  bankAccountNumber,
  isPhoneNumberValid,
  isPasswordValid,
  isBothPasswordMatch
}) => {
  if (fullname === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: '"Full Name" input field should not empty'
    })
  } else if (username === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: '"Username" input field should not empty'
    })
  } else if (email === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: '"Email Address" input field should not empty'
    })
  } else if (phoneNumber === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: '"Phone Number" input field should not empty'
    })
  } else if (isPhoneNumberValid === false) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'The phone number is invalid. Please check your input!'
    })
  } else if (bankAccountNumber === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: '"Bank Account Number" input field should not empty'
    })
  } else if (isBothPasswordMatch === 'Not Set') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please enter your password and confirmation password!'
    })
  } else if (isPasswordValid === false) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Your password must contain at least 8 characters'
    })
  } else if (isBothPasswordMatch === false) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'The confirmation password does not match'
    })
  }
}

export { alertIfFoundMissingInput }
