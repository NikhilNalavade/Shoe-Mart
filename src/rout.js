import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Comp/Home'
import Product from './Comp/Product'
import Cart from './Comp/Cart'
import Contact from './Comp/Contact'

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
            <Route path='/Product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default Rout