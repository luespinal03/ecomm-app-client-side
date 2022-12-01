import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer'

const GlobalLayout = () => {
    return (
        <div className='flex'>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default GlobalLayout