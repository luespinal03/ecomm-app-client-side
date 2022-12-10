import { useState, useEffect } from 'react';
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer'
import './LoginPage.css'

const SigninPage = () => {
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    const loginHandler = async () => {
        const loginResult = await auth.login(email, password);
        if (loginResult.success && email.length > 0 && password.length > 0) navigate("/");
        if (email.length < 1) setEmailError('Please enter a valid email address.');
        if (password.length < 1) setPasswordError('Please enter a valid password.');
        if (!loginResult.success) setLoginMessage(loginResult.message);

        else setMessage('Please fix errors below.')
    }

    useEffect(() => {
        if (email.length > 0) setEmailError('')
        if (password.length > 0) setPasswordError('')
        if (email.length > 0 && password.length > 0) setMessage('')
    }, [email, password])




    return (
        <>
            <div className="container mt-40 flex flex-col bg-gray-100 "  >
                <div className="flex shadow-md my-10">
                    <div className="w-full bg-white px-10 py-10">
                        <h3 className="font-semibold text-2xl">Welcome to GAMESHAK</h3>
                        <p className='text-[20px] ml-[20px] text-neutral-500'>Sign in to your GAMESHAK account</p>
                        <p className='text-red-600 text-lg'>{message}</p>


                        <input type='email' placeholder='Email' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setEmail(e.target.value) }}></input>
                        <p className='text-red-600 text-lg mr-[400px]'>{emailError}</p>

                        <input type='password' placeholder='Password' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setPassword(e.target.value) }}></input>
                        <p className='text-red-600 text-lg mr-[400px]'>{passwordError}</p>

                        <br />
                        <a className='text-[15px] mr-[280px] mt-[5px]'>Forgot password?</a>
                        <div className='bg-slate-100 p-10 rounded-xl mt-14'>
                            <input type='checkbox' className='h-[20px] w-[20px] mt-[20px]'></input>
                            <label className='text-[25px] ml-[20px] text-neutral-500'>Keep me signed in</label>
                            <p className='text-neutral-500'>You won't have to sign in as often on this device, only check this box on personal devices.</p>
                            <button onClick={loginHandler} className='px-8 py-3 m-2 w-2/4 text-lg'>Sign in</button>
                            <p className='text-[20px] ml-[20px] text-neutral-500 justify-center'>Or</p>
                            <button className='px-8 py-3 w-2/4 text-lg' onClick={() => { navigate('/signup') }}>Sign Up</button>
                            <h3>{loginMessage}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0 w-100'>
                <Footer />
            </div>

        </>

    )
}

export default SigninPage
