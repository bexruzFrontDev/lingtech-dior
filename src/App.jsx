import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Korzina from './pages/Korzina/Korzina'
import Admin from './pages/Admin/Admin'
import Parol from './pages/Parol/Parol'
import Favourites from './pages/Favourites/Favourites'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/korzina' element={<Korzina/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/parol' element={<Parol/>}/>
      <Route path='/fav' element={<Favourites/>}/>
      </Routes> 
    </>
  )
}

export default App
