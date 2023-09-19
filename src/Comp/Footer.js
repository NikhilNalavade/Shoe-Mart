import React from 'react'
import { BsFacebook , BsInstagram , BsTwitter , BsYoutube } from 'react-icons/bs';
import '../footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img src='./Img/1432508-middle.svg' alt='logo' height={80} width={80}></img>
                    </div>


                    <div className='detail'>
                        <p>Give your feet the beauty treatment that only brand new shoes can give.</p>
                        <div className='icon'>
                            <li><BsFacebook /></li>
                            <li><BsInstagram /></li>
                            <li><BsTwitter /></li>
                            <li><BsYoutube /></li>
                        </div>
                    </div>
                </div>
            

                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>


                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer