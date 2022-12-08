import React, { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterAdmin from './pages/Admin/RegisterAdmin'
import NotFoundPage from './pages/NotFoundPage'
import Profile from './pages/Profile'
import Dashboard from './pages/Admin/Dashboard'
import Articles from './pages/Admin/Articles'
import Categories from './pages/Admin/Categories'
import Tourism from './pages/Admin/Tourism'
import DetailTourism from './pages/DetailTourism'
import DetailArticle from './pages/DetailArticle'
import Explore from './pages/Explore'
import Article from './pages/Article'
import Order from './pages/Order'
import ProfileEdit from './pages/ProfileEdit'
import AboutUs from './pages/AboutUs'
import Wishlists from './pages/Wishlists'
import Booking from './pages/Booking'
import LoginAdmin from './pages/Admin/LoginAdmin'
import ArticleGalleries from './pages/Admin/ArticleGalleries'
import ArticleComments from './pages/Admin/ArticleComments'
import DestinationGalleries from './pages/Admin/DestinationGalleries'
import Transactions from './pages/Admin/Transactions'
import ChangePassword from './pages/ChangePassword'
import Payment from './pages/Payment'
import LayoutAdmin from './components/Admin/LayoutAdmin'
import HeaderComponent from './components/HeaderComponent'
import LoadingIndicatorComponent from './components/LoadingIndicatorComponent'
import AppContext from './context/AppContext'
import { getUserLogged } from './utils/network-data'

const App = () => {
  const [authedUser, setAuthedUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    const response = await getUserLogged()
    try {
      if (!response.error) {
        if (response.data.message) {
          setIsLoading(false)
          setAuthedUser(null)
          localStorage.removeItem('accessToken')
        } else {
          if (response.data.data.role === 'admin') {
            setIsAdmin(true)
          }
          setIsLoading(false)
          setAuthedUser(response.data.data)
        }
      }
    } catch (error) {
      setIsLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error
      })
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      setAuthedUser(null)
      setIsLoading(false)
    } else {
      fetchData()
    }
  }, [])

  const AppContextValue = { authedUser, setAuthedUser, isAdmin, setIsAdmin, isLoading, setIsLoading }
  return (
    <AppContext.Provider value={AppContextValue}>
      {isLoading && <LoadingIndicatorComponent />}
      <main>
        <Routes>
          <Route path='/admin/*' element={<LayoutAdmin />} />
          <Route path='*' element={<HeaderComponent />} />
        </Routes>
        <Routes>
          <Route path='/admin/register' element={<RegisterAdmin />} />
          <Route path='/admin/login' element={<LoginAdmin />} />
          <Route path='/admin/' element={<Dashboard />} />
          <Route path='/admin/articles' element={<Articles />} />
          <Route path='/admin/article_galleries' element={<ArticleGalleries />} />
          <Route path='/admin/article_comments' element={<ArticleComments />} />
          <Route path='/admin/categories' element={<Categories />} />
          <Route path='/admin/tourism' element={<Tourism />} />
          <Route path='/admin/tourism_galleries' element={<DestinationGalleries />} />
          <Route path='/admin/transactions' element={<Transactions />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/user/booking' element={<Booking />} />
          <Route path='/user/booking/:id' element={<Payment />} />
          <Route path='/user/saved' element={<Wishlists />} />
          <Route path='/user/profile/edit' element={<ProfileEdit />} />
          <Route path='/user/profile/change-password' element={<ChangePassword />} />
          <Route path='/tourism' element={<Explore />} />
          <Route path='/tourism/:id' element={<DetailTourism />} />
          <Route path='/articles' element={<Article />} />
          <Route path='/articles/:id' element={<DetailArticle />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </AppContext.Provider>
  )
}

export default App
