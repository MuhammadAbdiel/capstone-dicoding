import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/register' element={<RegisterAdmin />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/tourism' element={<Explore />} />
        <Route path='/tourism/:id' element={<DetailTourism />} />
        <Route path='/articles' element={<Article />} />
        <Route path='/articles/:id' element={<DetailArticle />} />
        <Route path='/admin/' element={<Dashboard />} />
        <Route path='/admin/articles' element={<Articles />} />
        <Route path='/admin/categories' element={<Categories />} />
        <Route path='/admin/tourism' element={<Tourism />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
