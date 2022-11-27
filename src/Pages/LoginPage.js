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
        <div>
            <h1>Welcome back !</h1>
            <label type='text'>Email: </label>
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} className='login-email'></input>
            <br />
            <label type='password'>Password: </label>
            <input type="text" onChange={(e) => { setPassword(e.target.value) }} className='login-password'></input>
            <br />
            <br />

            <button onClick={loginHandler} className='login-button'>Login</button>
            <h3>{loginMessage}</h3>
        </div>
    )
}

export default LoginPage