import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Nav from '../../components/Nav/Nav';
import './product.css'
import Footer from '../../components/Footer/Footer';
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addItem, getItem, removeItem } = useCart();

  function getProduct() {
    axios
      .get(`http://localhost:1111/sneakers/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <Nav />
      <div className='container'>
        <div className='product'>
          <div className='p-left'>
            <img width={400} src={product.image} alt='' />
          </div>
          <div className='p-right'>
            <h1>{product.name}</h1>
            <h2>€{product.price}</h2>
            {!getItem(product.id) ? (
              <button className='sss' onClick={() => addItem(product)}>🛒 Add to cart</button>
            ) : (
              <button className='sss' onClick={() => removeItem(product.id)}>
                ❌ Remove from cart
              </button>
            )}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Product
