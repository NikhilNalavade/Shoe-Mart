import React, { useState } from 'react'
import '../nav.css'
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
        <div className='a'>  
                <div className='icon'>
                <FaTruck />
                </div>
                <p>Shop without Borders, Free Shipping on Us!</p>
        </div>
        <div className='header'>
            <div className='catainer'>
                <div className='logo'>
                    <img alt='logo' src='./img/1432508-middle.svg' height={80} width={80}/>
                </div>
                
                <div className='search_box'>
                    <input type='text' value={search} placeholder='Enter Product Name' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                    <button onClick={() => searchbtn (search)}>Search</button>
                </div>
                    
                <div className='icon'>
                    {
                        isAuthenticated &&
                        (
                            <div className='account'>
                            <div className='user'>
                                <AiOutlineUser />
                            </div>
                                <p>Hello, {user.name}</p>
                        </div>
                        )
                    }
                  
                        <div className='s_icon'>
                            <Link to="/" className='link'><AiOutlineHeart /></Link>
                            <Link to="/cart" className='link'><BsBagCheck /></Link>
                        </div>
                </div>  
            </div>
        </div>
        <div className='header2'>
            <div className='con'>
                <div className='mav'>
                    <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/Product' className='link'>Product</Link></li>
                    <li><Link to='/About' className='link'>About</Link></li>
                    <li><Link to='/Contact' className='link'>Contact</Link></li>
                </ul>
                </div>
                <div className='auth'>
                    {
                        isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                        :
                        <button onClick={() => loginWithRedirect()}><FiLogIn /></button>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar