import React, { useState } from 'react'
import './korzina.css'
import Nav from '../../components/Nav/Nav'
import { useCart } from 'react-use-cart'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../../components/Footer/Footer'
const notify = () => toast('Zakaz berish uchun Loging qil!');

const Korzina = () => {
  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart, cartTotal } = useCart()

  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [sms, setSms] = useState('Optional')

 
  const postTest = () => {
    axios.post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>
        Ism: ${name}
        Razmer: ${size}
        SMS: ${sms}

    
${items
  .map((item) => {
    return `
<b>${item.name}</b>
${item.quantity} x ${item.price} $ = $ 
    `;
  })
  .join("")}        
<b>Total:</b> ${cartTotal} $`
      )}&parse_mode=html`
    )
    .then(() =>  {
      emptyCart()
      window.location.reload()
    })
  };

  return (
    <div>
      <Nav />
      <div className="container">
        {isEmpty ? (
          <div className="empty">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png?f=webp" alt="" />
          </div>
        ) : (
          <div className="korzina">
            <br />
            <button className='clear-btn'  onClick={() => emptyCart()}>Tozalash🗑️</button>
            <br />
            <br />
            {items.map((el) => {
              const pricCounte = el.price * el.quantity;
              return (
                <div className="item" key={el.id}>
                  <img width={300} src={el.image} alt="" />
                  <p>{el.name}</p>
                  <b>{pricCounte}$</b>
                  <br />
                  <button className='minus-btn' onClick={() => updateItemQuantity(el.id, el.quantity -1)}>-</button>
                  <b>{el.quantity}</b>
                  <button className='minus-btn' onClick={() => updateItemQuantity(el.id, el.quantity +1)}>+</button>
                  <h1 className='krznka' onClick={() => removeItem(el.id)}>🗑️</h1>
                </div>
              )
            })}
            <h1>To'lov: $ {cartTotal}</h1>
           {localStorage.getItem('parol') ? (
            <div className='offer'>
              <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              placeholder='Ism'/>
              <input
              disabled={!name} 
              value={size} 
              onChange={(e) => setSize(e.target.value)} 
              type="text" 
              placeholder='Razmer'/>
              <textarea 
              value={sms} 
              onChange={(e) => setSms(e.target.value)} 
              placeholder='SMS'>
              </textarea>
              <button disabled={!size} className='order-btn'  onClick={() => postTest()}>Zakaz berish</button> 
            </div>
               
           ):(
          <>
            <button className='order-btn'  onClick={notify}>Log in</button>
            <Toaster/>
          </>
           )}
          </div>
        )}
        <Footer/>
      </div>
    </div>
  )
}

export default Korzina
