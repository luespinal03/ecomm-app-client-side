import { useState } from 'react';
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    const loginHandler = async () => {
        const loginResult = await auth.login(email, password);
        if (loginResult.success) {
            navigate("/");
        }
        if (!loginResult.success) {
            setLoginMessage(loginResult.message);
        }
    }
    return (
        <div className='bg-white rounded-xl shadow-2xl mt-40 ml-96'>
            <h1>Welcome back !</h1>
            <label type='text'>Email: </label>
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='login-email' placeholder='john@doe.com'></input>
            <br />
            <label type='text'>Password: </label>
            <input type="password" value={password} placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='login-password'></input>
            <br />
            <br />

            <button onClick={loginHandler} className='px-8 py-3 m-2'>Sign in</button>
            <button className='px-8 py-3' onClick={() => { navigate('/registration') }}>Sign Up</button>
            <h3>{loginMessage}</h3>
        </div>
    )
}

export default LoginPage