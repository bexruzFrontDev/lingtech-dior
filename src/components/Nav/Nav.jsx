import React, { useContext, useState } from 'react'
import './nav.css'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { Context } from '../../context'
import { FavContext } from '../../favContext'
const Nav = () => {
    const {fav} = useContext(FavContext)
    const {security} = useContext(Context)
    const { totalItems } = useCart()
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const [rasm, setRasm] = useState('')
    const [name, setName] = useState('')
    const [parol, setParol] = useState('')

    function Login(e) {
        e.preventDefault();
        localStorage.setItem('rasm', rasm)
        localStorage.setItem('name', name)
        localStorage.setItem('parol', parol)
        window.location.reload();
    }

    function Chiqish() {
        localStorage.removeItem('rasm')
        localStorage.removeItem('name')
        localStorage.removeItem('parol')
        window.location.reload();
    }
    return (
        <nav>
            <div className="container">
                <div className="n-main">

                    <img src="https://i.pinimg.com/736x/33/e6/3d/33e63d5adb0da6b303a83901c8e8463a.jpg" alt="" />
                    <input type="text" placeholder='What are you looking for buraza ?' />
                    <Link to={'/korzina'}><button>🛒({totalItems})</button></Link>
                    <Link className='fav' to={'/fav'}>💖({fav.length})</Link>
                    <button className='www' onClick={toggleDrawer}>Profile 👤</button>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='right'
                        className='bla bla bla'
                        size={'35%'}
                       
                    >
                        <div>
                            {localStorage.getItem('parol') ? (
                                <div className="profile">
                                    <img src={localStorage.getItem('rasm')} alt="" />
                                    <h1>{localStorage.getItem('name')}</h1>
                                    <h4>{localStorage.getItem('parol')}</h4>
                                    <button onClick={() => Chiqish()}>Chiqish</button>
                                </div>
                            ) : (
                                <form onSubmit={Login}>
                                    <input value={rasm} onChange={(e) => setRasm(e.target.value)} type="text" placeholder='Rasm' required />
                                    <br />
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' required />
                                    <br />
                                    <input value={parol} onChange={(e) => setParol(e.target.value)} type="password" placeholder='Parol' required />
                                    <br />
                                    <button type='submit'>Log in</button>
                                </form>
                            )}
                        </div>
                    </Drawer>
                </div>
                <div className="main">
                    <a href="#">LATEST</a>
                    <a href="#">SNEAKERS</a>
                    <a href="#">MEN</a>
                    <a href="#">WOMEN</a>
                    <a href="#">SALE</a>
                    <a href="#">BRANDS</a>
                    <button className='www' onClick={security}>👁️ Adminga kirish! 👁️</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav
