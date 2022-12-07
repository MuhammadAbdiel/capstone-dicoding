import Swal from 'sweetalert2'

const alertIfFoundMissingInput = ({
  fullname = null,
  username = null,
  email = null,
  phoneNumber = null,
  bankAccountNumber = null,
  password = null,
  isPhoneNumberValid = null,
  isPasswordValid = null,
  isBothPasswordMatch = null
}) => {
  if (fullname === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kolom input "Nama Lengkap" tidak boleh kosong'
    })
  } else if (username === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kolom input "Username" tidak boleh kosong'
    })
  } else if (email === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kolom input "Alamat Email" tidak boleh kosong'
    })
  } else if (phoneNumber === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kolom input "No.Telepon" tidak boleh kosong'
    })
  } else if (isPhoneNumberValid === false) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Nomor telepon tidak valid. Silahkan cek masukan Anda!'
    })
  } else if (bankAccountNumber === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kolom input "No.Rekening" tidak boleh kosong'
    })
  } else if (password === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kolom input "Kata Sandi" tidak boleh kosong'
    })
  } else if (isBothPasswordMatch === 'Not Set') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Masukkan kata sandi dan konfirmasi kata sandi Anda!'
    })
  } else if (isPasswordValid === false) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Kata sandi harus berisi setidaknya 8 karakter'
    })
  } else if (isBothPasswordMatch === false) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Konfirmasi kata sandi tidak sesuai'
    })
  }
}

export { alertIfFoundMissingInput }
