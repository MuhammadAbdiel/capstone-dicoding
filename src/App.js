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
import Destinations from './pages/Admin/Destinations'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/admin/' element={<Dashboard />} />
        <Route path='/admin/articles' element={<Articles />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/destinations' element={<Destinations />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
