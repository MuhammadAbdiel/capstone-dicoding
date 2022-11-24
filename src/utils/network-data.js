import Swal from 'sweetalert2'

const BASE_URL = 'https://capstone-backend-production-7544.up.railway.app/api'

function getAccessToken() {
  return localStorage.getItem('accessToken')
}

function putAccessToken(accessToken) {
  return localStorage.setItem('accessToken', accessToken)
}

async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function register({ name, username, email, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, username, email, password, password_confirmation })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true }
  }

  return { error: false }
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function logout() {
  const response = await fetchWithToken(`${BASE_URL}/logout`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  localStorage.removeItem('accessToken')

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function loginAdmin({ email, password }) {
  const response = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function registerAdmin({ name, username, email, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, username, email, password, password_confirmation })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true }
  }

  return { error: false }
}

async function getUserLoggedAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/user`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

async function logoutAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/logout`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  localStorage.removeItem('accessToken')

  if (responseJson.status !== 'success') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: responseJson.message
    })
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  logout,
  loginAdmin,
  registerAdmin,
  getUserLoggedAdmin,
  logoutAdmin
}
