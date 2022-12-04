import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer'

const GlobalLayout = ({ email }) => {
    return (
        <div className='flex'>
            <NavBar email={email} />
            <Outlet />
        </div>
    )
}

export default GlobalLayout