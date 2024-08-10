import React, { useContext, useEffect } from 'react'
import './admin.css'
import { Context } from '../../context';
import Sneakers from '../../components/Sneakers/Sneakers';
const Admiin = () => {
const {security,chiqish,navigete, yaratish} = useContext(Context)
useEffect(() => {
  if (!localStorage.getItem("AdminToken"))
    navigete(-1)
},[])
  return (
    <>
    <form onSubmit={yaratish}>
      <input type="text" placeholder='name' required />
      <input type="text" placeholder='image' required />
      <input type="number" placeholder='price' required />
      <input type="text" placeholder='category' required />
      <button type='submit'>Yaratish</button>
    </form>
     <button className='eee' onClick={chiqish}>Chiqish</button>
 <Sneakers/>
    </>
  )
}

export default Admiin
