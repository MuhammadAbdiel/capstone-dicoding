// const BASE_URL = 'https://capstone-backend-production-ce8b.up.railway.app/api'
const BASE_URL = 'http://ecommerce-restful-api.test/api'

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
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

// Profile

async function updateProfile({ name, username, email, phone_number, bank_account_number }) {
  const response = await fetchWithToken(`${BASE_URL}/user/update`, {
    method: 'PUT',
    body: JSON.stringify({ name, username, email, phone_number, bank_account_number })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function changePassword({ old_password, password, password_confirmation }) {
  await fetchWithToken(`${BASE_URL}/user/change-password`, {
    method: 'PUT',
    body: JSON.stringify({ old_password, password, password_confirmation })
  })

  return { error: false }
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

  return { error: false, data: responseJson }
}

async function register({ name, username, email, phone_number, bank_account_number, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, username, email, phone_number, bank_account_number, password, password_confirmation })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getUserLogged() {
  const response = await fetchWithToken(`${BASE_URL}/user`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getDataAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/data`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function logout() {
  const response = await fetchWithToken(`${BASE_URL}/logout`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
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

  return { error: false, data: responseJson }
}

async function registerAdmin({ name, username, email, phone_number, bank_account_number, password, password_confirmation }) {
  const response = await fetch(`${BASE_URL}/admin/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ name, username, email, phone_number, bank_account_number, password, password_confirmation })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getUserLoggedAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/user`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function logoutAdmin() {
  const response = await fetchWithToken(`${BASE_URL}/admin/logout`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

// Category

async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/categories`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getCategoryById(category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createCategory({ name }) {
  const response = await fetchWithToken(`${BASE_URL}/categories`, {
    method: 'POST',
    body: JSON.stringify({ name })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function updateCategory({ name }, category_id) {
  const response = await fetchWithToken(`${BASE_URL}/categories/${category_id}`, {
    method: 'PUT',
    body: JSON.stringify({ name })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function deleteCategory(category_id) {
  await fetchWithToken(`${BASE_URL}/categories/${category_id}`, {
    method: 'DELETE'
  })

  return { error: false }
}

// Destination

async function getAllDestinations() {
  const response = await fetch(`${BASE_URL}/destinations`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getDestinationById(destination_id) {
  const response = await fetch(`${BASE_URL}/destinations/${destination_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createDestination({ name, open_time, close_time, price, rating, location, description }) {
  const response = await fetchWithToken(`${BASE_URL}/destinations`, {
    method: 'POST',
    body: JSON.stringify({ name, open_time, close_time, price, rating, location, description })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function updateDestination({ name, open_time, close_time, price, rating, location, description }, destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, open_time, close_time, price, rating, location, description })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function deleteDestination(destination_id) {
  await fetchWithToken(`${BASE_URL}/destinations/${destination_id}`, {
    method: 'DELETE'
  })

  return { error: false }
}

// Destination Gallery

async function getAllDestinationGalleries() {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getDestinationGalleryById(destination_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries/${destination_gallery_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createDestinationGallery({ image, destination_id }) {
  const response = await fetchWithToken(`${BASE_URL}/destination_galleries`, {
    method: 'POST',
    body: JSON.stringify({ image, destination_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function deleteDestinationGallery(destination_gallery_id) {
  await fetchWithToken(`${BASE_URL}/destination_galleries/${destination_gallery_id}`, {
    method: 'DELETE'
  })

  return { error: false }
}

// Article

async function getAllArticles() {
  const response = await fetch(`${BASE_URL}/articles`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getArticleById(article_id) {
  const response = await fetch(`${BASE_URL}/articles/${article_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createArticle({ title, excerpt, content, category_id }) {
  const response = await fetchWithToken(`${BASE_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify({ title, excerpt, content, category_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function updateArticle({ title, excerpt, content, category_id }, article_id) {
  const response = await fetchWithToken(`${BASE_URL}/articles/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, excerpt, content, category_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function deleteArticle(article_id) {
  await fetchWithToken(`${BASE_URL}/articles/${article_id}`, {
    method: 'DELETE'
  })

  return { error: false }
}

// Article Gallery

async function getAllArticleGalleries() {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getArticleGalleryById(article_gallery_id) {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries/${article_gallery_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createArticleGallery({ image, article_id }) {
  const response = await fetchWithToken(`${BASE_URL}/article_galleries`, {
    method: 'POST',
    body: JSON.stringify({ image, article_id })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function deleteArticleGallery(article_gallery_id) {
  await fetchWithToken(`${BASE_URL}/article_galleries/${article_gallery_id}`, {
    method: 'DELETE'
  })

  return { error: false }
}

// Transaction

async function getAllTransactionUsers() {
  const response = await fetchWithToken(`${BASE_URL}/user/transactions`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getAllTransactions() {
  const response = await fetchWithToken(`${BASE_URL}/transactions`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getTransactionById(transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/transactions/${transaction_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createTransaction({ quantity }, destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/orders/${destination_id}`, {
    method: 'PUT',
    body: JSON.stringify({ quantity })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function updateTransaction({ transaction_status }, transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/transactions/${transaction_id}`, {
    method: 'PUT',
    body: JSON.stringify({ transaction_status })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function cancelTransaction(transaction_id) {
  const response = await fetchWithToken(`${BASE_URL}/orders/${transaction_id}/cancel`, {
    method: 'PUT'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

// Article Comment

async function getArticleCommentsByArticleId(article_id) {
  const response = await fetch(`${BASE_URL}/comments/${article_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getAllArticleComments() {
  const response = await fetchWithToken(`${BASE_URL}/comments`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getArticleCommentById(comment_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${comment_id}`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function createArticleComment({ content }, article_id) {
  const response = await fetchWithToken(`${BASE_URL}/comments/${article_id}`, {
    method: 'PUT',
    body: JSON.stringify({ content })
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function deleteArticleComment(comment_id) {
  await fetchWithToken(`${BASE_URL}/comments/${comment_id}`, {
    method: 'DELETE'
  })

  return { error: false }
}

// Wishlist

async function createWishlists(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/wishlists/${destination_id}`, {
    method: 'PUT'
  })

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function checkWishlist(destination_id) {
  const response = await fetchWithToken(`${BASE_URL}/wishlists/${destination_id}`)

  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

async function getAllWishlistUsers() {
  const response = await fetchWithToken(`${BASE_URL}/user/wishlists`)
  const responseJson = await response.json()

  return { error: false, data: responseJson }
}

export {
  getAccessToken,
  putAccessToken,
  updateProfile,
  changePassword,
  login,
  register,
  getUserLogged,
  getDataAdmin,
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
  getAllTransactionUsers,
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  cancelTransaction,
  getArticleCommentsByArticleId,
  getAllArticleComments,
  getArticleCommentById,
  createArticleComment,
  deleteArticleComment,
  createWishlists,
  checkWishlist,
  getAllWishlistUsers
}
