import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="f-main">
            <div className="cart">
                <h2>Customer service</h2>
                <p>Contact</p>
                <p>Shipping & handling</p>
                <p>Returns</p>
                <p>Payment</p>
                <p>Guarantee</p>
                <p>Frequently asked questions</p>
            </div>
            <div className="cart">
                <h2>About Sneaker District</h2>
                <p>Our webshops</p>
                <p>Large orders</p>
                <p>Sitemap</p>
                
            </div>
            <div className="cart">
                <h2>Your advantages</h2>
                <p>Fast delivery</p>
                <p>Excellent service</p>
                <p>Best brands</p>
            </div>
            <div className="cart">
                <h2>Any questions?</h2>
                <p>Send us an e-mail</p>
                <h3>Socials</h3>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
