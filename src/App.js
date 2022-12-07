import React from 'react'
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
const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/register' element={<RegisterAdmin />} />
        <Route path='/admin/login' element={<LoginAdmin />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/booking' element={<Booking />} />
        <Route path='/user/saved' element={<Wishlists />} />
        <Route path='/user/profile/edit' element={<ProfileEdit />} />
        <Route path='/user/profile/change-password' element={<ChangePassword />} />
        <Route path='/tourism' element={<Explore />} />
        <Route path='/tourism/:id' element={<DetailTourism />} />
        <Route path='/articles' element={<Article />} />
        <Route path='/articles/:id' element={<DetailArticle />} />
        <Route path='/admin/' element={<Dashboard />} />
        <Route path='/admin/articles' element={<Articles />} />
        <Route path='/admin/article_galleries' element={<ArticleGalleries />} />
        <Route path='/admin/article_comments' element={<ArticleComments />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/tourism' element={<Tourism />} />
        <Route path='/admin/tourism_galleries' element={<DestinationGalleries />} />
        <Route path='/admin/transactions' element={<Transactions />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}

export default App
