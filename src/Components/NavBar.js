import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/Auth';
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './NavBar.css'

const NavBar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState('');

    const logoutHandler = async () => {
        const logoutResult = await auth.logout();
        console.log(logoutResult)
        if (logoutResult.success) {
            navigate("/");
        }
        if (!logoutResult.success) {
            setLogoutMessage(logoutResult.message);
        }
    }

    return (
        <div >
            <div className='navbar'> <Link to="/" className='nav-bar-item'>Home Page</Link>
                <Link to="/registration" className=' nav-bar-item'>Register Here!</Link>
                <Link to="/login" className='nav-bar-item'>Login Here !</Link>
                <Link to='/products' className='nav-bar-item'>Products</Link>
                <button className='shopping-cart'><AiOutlineShoppingCart size={50} />
                </button>
            </div>



            <div className='current-user'>
                <h3>{auth.userEmail !== null ? `Current User: ${auth.userEmail}` : 'no email found'}</h3>
            </div>

            <button onClick={logoutHandler} className='logout-button'>Logout</button>
            <h3>{logoutMessage}</h3>

        </div>
    )
}

export default NavBar