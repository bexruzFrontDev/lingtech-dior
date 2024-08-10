import React, { useEffect, useState, useContext } from 'react'
import './sneakers.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { FavContext } from "../../favContext";

const Sneakers = () => {
    const [data, setData] = useState([]);
    const {handleAddToFav,fav} = useContext(FavContext)

    function getApi() {
        axios
            .get('http://localhost:1111/sneakers')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        getApi();
    }, []);
    return (
        <>
            <div className="container">
                <h1>LATEST SNEAKERS</h1>
                <div className='s-main'>
                    {data.map((el) => {
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
                <Footer/>
            </div>
        </>
    )
}

export default Sneakers
