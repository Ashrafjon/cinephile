import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Search from './pages/Search'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Details from './components/details'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        <Route path='/search' element={<Search />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App