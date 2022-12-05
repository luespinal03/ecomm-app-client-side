import { useState } from 'react';
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer'
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
            <div div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mt-40 ml-96' >
                <div className='bg-white rounded-xl shadow-2xl '>
                    <div className='p-8'>
                        <h3 className='font-bold text-2xl my-6'>Welcome back !</h3>
                        <label type='text'>Email: </label>
                        <br />
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='login-email' placeholder='john@doe.com'></input>
                        <br />
                        <label type='text'>Password: </label>
                        <input type="password" value={password} placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='login-password'></input>
                        <br />
                        <br />
                        <div className='bg-slate-100 p-10 rounded-xl mt-14'>
                            <button onClick={loginHandler} className='px-8 py-3 m-2'>Sign in</button>
                            <button className='px-8 py-3' onClick={() => { navigate('/registration') }}>Sign Up</button>
                            <h3>{loginMessage}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 w-100'>
                <Footer />
            </div>

        </div>

    )
}

export default LoginPage
