import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Product provider
import ProductProvider from './assets/context/ProductContext.jsx'
//sidebar provider
import SidebarProvider from './assets/context/SidebarContext.jsx'
import CartProvider from './assets/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root'))

.render(
  <SidebarProvider> 
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
