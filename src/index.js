import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {CartProvider} from 'react-use-cart'
import { ContextProvider } from './context';
import { FavContextProvider } from './favContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <CartProvider>
    <ContextProvider>
    <FavContextProvider>
    <App />
    </FavContextProvider>
    </ContextProvider>
    </CartProvider>
 </BrowserRouter>
   
  
);
