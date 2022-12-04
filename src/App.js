import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterAdmin from './pages/RegisterAdmin'
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

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/register' element={<RegisterAdmin />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/saved' element={<Wishlists />} />
        <Route path='/user/profile/edit' element={<ProfileEdit />} />
        <Route path='/tourism' element={<Explore />} />
        <Route path='/tourism/:id' element={<DetailTourism />} />
        <Route path='/articles' element={<Article />} />
        <Route path='/articles/:id' element={<DetailArticle />} />
        <Route path='/admin/' element={<Dashboard />} />
        <Route path='/admin/articles' element={<Articles />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/tourism' element={<Tourism />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  )
}

export default App
