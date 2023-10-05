import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Homeproduct from './homeproduct';
import rename from '../../public/img/rename.png'
import '../home.css'

const Home = ({detail, view, close, setClose, addtocart}) => {
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
        <div className='top_bannerr'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Shoes Collection of 2023</h2>
                    <Link to='/Product' className='link'>Shop Now <BsArrowRight /></Link>
                </div>
                <div className='img_box'>
                    <img src={rename} alt='Best Shoes' height={500} width={500}></img>
                </div>
            </div>
        </div>




        <div className='product_type'>
            <div className='container'>
                
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/R.png' alt='Sports Shoes' height={90} width={150}></img>
                    </div>
                    <div className='detail'>
                        <p>Sports Shoes</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/R (1).png' alt='Formal Shoes' height={90} width={150}></img>
                    </div>
                    <div className='detail'>
                        <p>Formal Shoes</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/Men-Shoes-PNG-Clipart.png' alt='Casual Shoes' height={90} width={150}></img>
                    </div>
                    <div className='detail'>
                        <p>Casual Shoes</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='img_box'>
                        <img src='/img/106832392-1611931738880-CW5883-100_237589929_D_R_1X1_original.png' alt='Slip On' height={100} width={150}></img>
                    </div>
                    <div className='detail'>
                        <p>Slip On</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='about'>
            <div className='container'>
                <div className='box'>
                    <div className='icon'>
                        <FiTruck />
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                        <p>Order above $2000</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <BsCurrencyDollar />
                    </div>
                    <div className='detail'>
                        <h3>Return & Refund</h3>
                        <p>Money Back Gaurenty</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <HiOutlineReceiptPercent />
                    </div>
                    <div className='detail'>
                        <h3>Member Discount</h3>
                        <p>On Every Order</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'>
                        <BiHeadphone />
                    </div>
                    <div className='detail'>
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='product'>
            <h2>Top Product</h2>
            <div className='container'>
                {
                    Homeproduct.map((curElm) =>
                    {
                        return(
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                    <div className='icon'>
                                        <l onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></l>
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
                        )
                    })
                }
            </div>
        </div>
        <div className='banner'>
            <div className='container'>
                 <div className='detail'>
                     <h4>LATEST SHOES</h4>
                    <h3>Nike Jordan Max Aura 5</h3>
                    <p>$  970</p>
                    <Link to='/Product' className='link'>Shop Now <BsArrowRight /></Link>
                 </div>
                 <div className='img_box'>
                     <img src='./Img/bp1.png' alt='Sliderimg' height={500} width={500}></img>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Home
