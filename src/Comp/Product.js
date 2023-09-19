import React from 'react'
import Productdetail from './Productdetail'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineClose} from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import '../product.css'

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

  const { loginWithRedirect, isAuthenticated} = useAuth0();

  const filtterproduct = (product) =>
  {
    const updata = Productdetail.filter((x) =>{
      return x.Cat === product;
    })
    setProduct(updata);
  }
  const AllProducts = () =>
  {
    setProduct(Productdetail)
  }
  return (
    <>
    {
      close ?
      <div className='products_detail'>
      <div className='container'>
        <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose /></button>
        {
          detail.map((curElm) =>
          {
            return(
              <div className='productbox'> 
                <div className='img-box'>
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className='detail'>
                  <h4>{curElm.Cat}</h4>
                  <h2>{curElm.Title}</h2>
                  <p>Nobody has ever measured, even poets, how much a heart can hold.</p>
                  <h3>{curElm.Price}</h3>
                  <button>Add To Cart</button>
                </div>
              </div>
            )
          })
        }
        <div className='productbox'> </div>
      </div>
    </div> : null
    }
     
        <div className='products'>
        <h2># Products</h2>
        <p>Home . Products</p>
          <div className='container'>
            <div className='filter'>
              <div className='categries'>
                <h3>Categories</h3>
                <ul>
                  <li onClick={() => AllProducts ()}>All Products</li>
                  <li onClick={() => filtterproduct ("Sports Shoes")}>Sports Shoes</li>
                  <li onClick={() => filtterproduct ("Casual Shoes")}>Casual Shoes</li>
                  <li onClick={() => filtterproduct ("Slip On")}>Slip On</li>
                  <li onClick={() => filtterproduct ("Formal Shoes")}>Formal Shoes</li>
                </ul>
              </div>
            </div>

            <div className='productbox'>
              <div className='contant'>
                {
                  product.map((curElm) =>
                  {
                    return(
                      <>
                      <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                    <div className='icon'>
                                      {
                                        isAuthenticated ?
                                        <l onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></l>
                                        :
                                        <l onClick={() => loginWithRedirect ()}><AiOutlineShoppingCart /></l>
                                      }
                                        
                                        <l onClick={() => view (curElm)}> <BsEye /></l>
                                        <l> <AiOutlineHeart /></l>
                                    </div>
                                </div>
                                <div className='detail'>
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>${curElm.Price}</h4>
                                </div>
                            </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Product