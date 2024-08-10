import React, { useState,useContext } from 'react'
import './favourites.css'
import { Link } from 'react-router-dom';
import { FavContext } from '../../favContext'
import Nav from '../../components/Nav/Nav'



const Favourites = () => {
    const {handleAddToFav,fav} = useContext(FavContext)
  return (
    <>
      <Nav/>
    <div className="container">
        {fav.length < 1 ? (
            <div className="bosh">
            <img src="https://www.adasglobal.com/img/empty-cart.png" alt="" />
          </div>
        ) : (
      <div className='f-main'>
                    {fav.map((el) => {
                        const isExists = fav.find((itm) => itm.id === el.id);
                        return (
                            <div className='card' key={el.id}>
                                {isExists ? (
                                    <button onClick={() => handleAddToFav(el)}>💖</button>
                                ):(
                                    <button onClick={() => handleAddToFav(el)}>🤍</button>
                                )}
                                <Link to={`/product/${el.id}`}>
                                <img width={'300px'} src={el.image} alt='' />
                                </Link>
                                <p>{el.name}</p>
                                <b>€{el.price}</b>
                            </div>
                             
                        );
                    })}
                </div>
        )} 
    </div>
    </>
  )
}

export default Favourites