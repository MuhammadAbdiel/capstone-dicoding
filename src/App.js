import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'
import Profile from './pages/Profile'
import Dashboard from './pages/Admin/Dashboard'
import Articles from './pages/Admin/Articles'
import Categories from './pages/Admin/Categories'
import Tourism from './pages/Admin/Tourism'
import DetailTourism from './pages/DetailTourism'
import DetailArticle from './pages/DetailArticle'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/Tourism/detail' element={<DetailTourism />} />
        <Route path='/articles/detail' element={<DetailArticle />} />
        <Route path='/admin/' element={<Dashboard />} />
        <Route path='/admin/articles' element={<Articles />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/Tourism' element={<Tourism />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
