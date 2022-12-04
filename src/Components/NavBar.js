import React, { useState } from 'react';
import { animateScroll as scroll, } from 'react-scroll'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { Link } from 'react-router-dom';
import './NavBar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = ({ email }) => {
    const auth = useAuth()
    const navigate = useNavigate();
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose = () => setNav(!nav)

    return (

        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className='free-shipping-banner'>FREE 1-3 Day Shipping in Orders over $59</div>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <a href="/" className='no-underline'><h1 className='text-3xl font-bold mr-4 sm:text-4xl mb-4'>GAMESHAK.</h1></a>
                    <ul className='hidden md:flex'>
                        {/* <li><Link to="/" smooth={true} duration={500}>Home</Link></li> */}
                        <li><Link to="/about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li><Link to="/support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li><Link to="/products" smooth={true} offset={-100} duration={500}>Products</Link></li>

                    </ul>
                </div>

                <div className='ml-auto mr-3'> {auth.userEmail !== null && auth.userEmail.length > 0 ? (<h4>Welcome: {email}</h4>) : (<div />)}

                </div>

                <div className='hidden md:flex pr-4 mb-4'>
                    <Link to='/shoppingcart' className='mr-10 mt-2'><AiOutlineShoppingCart size={35} />
                    </Link>

                    <div >
                        {auth.userEmail !== null && auth.userEmail.length > 0 ? (
                            <button className=" mt-3 border-none bg-transparent text-black mr-4"
                                onClick={(e) => {
                                    auth.logout();
                                    navigate("/login");
                                }}
                            >
                                Sign Out
                            </button>
                        ) : (
                            <button className='mt-3 border-none bg-transparent text-black mr-4' onClick={() => { navigate('/login') }}>
                                Sign In
                            </button>
                        )}
                    </div>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

                </div>
            </div>


            {/* code below is handling when the screen is small like on a mobile device */}

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                {/* <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li> */}

                <div className='flex flex-col my-4'>


                    {/* <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4' onClick={() => { navigate('/login') }}>Sign In</button> */}


                    <div >
                        {auth.userEmail !== null && auth.userEmail.length > 0 ? (
                            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
                                onClick={(e) => {
                                    auth.logout();
                                    navigate("/login");
                                }}
                            >
                                Sign Out
                            </button>
                        ) : (
                            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4' onClick={() => { navigate('/login') }}>
                                Sign In
                            </button>
                        )}
                    </div>




                    <button className='px-8 py-3' onClick={() => { navigate('/registration') }}>Sign Up</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;