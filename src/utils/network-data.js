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

// User

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

// Admin

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
  const response = await fetch(`${BASE_URL}/admin/register`, {
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

// Category

async function getAllCategories() {
  const response = await fetchWithToken(`${BASE_URL}/categories`)
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

async function getCategoryById(category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`)
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

async function createCategory({ name }) {
  const response = await fetchWithToken(`${BASE_URL}/categories`, {
    method: 'POST',
    body: JSON.stringify({ name })
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

async function updateCategory({ name }, category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`, {
    method: 'PUT',
    body: JSON.stringify({ name })
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

async function deleteCategory(category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`, {
    method: 'DELETE'
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

// Destination

async function getAllDestinations() {
  const response = await fetchWithToken(`${BASE_URL}/destinations`)
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

async function getDestinationById(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`)
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

async function createDestination({ name, open_time, close_time, price, rating, location, description }) {
  const response = await fetchWithToken(`${BASE_URL}/destinations`, {
    method: 'POST',
    body: JSON.stringify({ name, open_time, close_time, price, rating, location, description })
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

async function updateDestination({ name, open_time, close_time, price, rating, location, description }, destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, open_time, close_time, price, rating, location, description })
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

async function deleteDestination(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`, {
    method: 'DELETE'
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

// Destination Gallery

async function getAllDestinationGalleries() {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries`)
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

async function getDestinationGalleryById(destination_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries/${destination_gallery_id}`)
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

async function createDestinationGallery({ image, destination_id }) {
  const response = await fetchWithToken(`${BASE_URL}/galleries/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ image, destination_id })
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

async function deleteDestinationGallery(destination_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries/${destination_gallery_id}`, {
    method: 'DELETE'
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

// Article

async function getAllArticles() {
  const response = await fetchWithToken(`${BASE_URL}/articles`)
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

async function getArticleById(article_id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${article_id}`)
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

async function createArticle({ title, excerpt, content, category_id }) {
  const response = await fetchWithToken(`${BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify({ title, excerpt, content, category_id })
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

async function updateArticle({ title, excerpt, content, category_id }, article_id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, excerpt, content, category_id })
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

async function deleteArticle(article_id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${article_id}`, {
    method: 'DELETE'
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

// Article Gallery

async function getAllArticleGalleries() {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries`)
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

async function getArticleGalleryById(article_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries/${article_gallery_id}`)
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

async function createArticleGallery({ image, article_id }) {
  const response = await fetchWithToken(`${BASE_URL}/galleries/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ image, article_id })
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

async function deleteArticleGallery(article_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries/${article_gallery_id}`, {
    method: 'DELETE'
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

// Transaction

async function getAllTransactions() {
  const response = await fetchWithToken(`${BASE_URL}/transactions`)
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

async function getTransactionById(transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/transactions/${transaction_id}`)
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

async function createTransaction({ quantity }, destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/orders/${destination_id}`, {
    method: 'POST',
    body: JSON.stringify({ quantity })
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

async function updateTransaction({ transaction_status }, transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/transactions/${transaction_id}`, {
    method: 'PUT',
    body: JSON.stringify({ transaction_status })
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

// Article Comment

async function getAllArticleComments() {
  const response = await fetchWithToken(`${BASE_URL}/comments`)
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

async function getArticleCommentById(comment_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${comment_id}`)
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

async function createArticleComment({ content }, article_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ content })
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

async function deleteArticleComment(comment_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${comment_id}`, {
    method: 'DELETE'
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

// Wishlist

async function createWishlists(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/wishlists/${destination_id}`, {
    method: 'PUT'
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
  logoutAdmin,
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
  getAllDestinationGalleries,
  getDestinationGalleryById,
  createDestinationGallery,
  deleteDestinationGallery,
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAllArticleGalleries,
  getArticleGalleryById,
  createArticleGallery,
  deleteArticleGallery,
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  getAllArticleComments,
  getArticleCommentById,
  createArticleComment,
  deleteArticleComment,
  createWishlists
}
