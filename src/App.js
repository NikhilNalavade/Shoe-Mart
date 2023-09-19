import './App.css';
import React, {useState} from 'react';
import Navbar from './Comp/Nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './rout';
import Footer from './Comp/Footer';
import Productdetail from './Comp/Productdetail';

const App = () => {
  const [cart, setCart] = useState([])


  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])


  const [product, setProduct] = useState(Productdetail)
  const searchbtn =(product) =>
  {
    const change = Productdetail.filter((x) =>
    {
      return x.Cat === product
    })
    setProduct(change)
  }
  const view =(product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }


 
  const addtocart = (product) =>
  {
    const exsit = cart.find((x) =>
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("This Product is already added to cart")
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert("Product is added to cart")
    }
  }

  console.log(cart)

  return (
    <div>
      <BrowserRouter>
      <Navbar searchbtn={searchbtn} />
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
