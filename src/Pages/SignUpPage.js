import { useState, useEffect } from 'react';
import { useAuth } from "../Hooks/Auth";
import Footer from '../Components/Footer'
import { useNavigate } from "react-router-dom";
import './SignUpPage.css'

const SignUpPage = () => {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');


    const [firstName, setFirstName] = useState('');
    const [message, setMessage] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();



    const registrationHandler = async () => {
        const registerResult = await auth.register(email, password, firstName, lastName);
        if (registerResult.success && firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && phone.length > 0) navigate("/login");
        if (firstName.length < 1) setFirstNameError('First Name is required.');
        if (lastName.length < 1) setLastNameError('Last Name is required.');
        if (email.length < 1) setEmailError('Please enter a valid email address.');
        if (password.length < 1) setPasswordError('Please enter a valid password.');
        if (phone.length < 1) setPhoneError('Phone Number is required.');
        if (!registerResult.success) setRegisterMessage(registerResult.message);


        else setMessage('Please fix errors below.')
    }

    useEffect(() => {
        if (firstName.length > 0) setFirstNameError('')
        if (lastName.length > 0) setLastNameError('')
        if (email.length > 0) setEmailError('')
        if (password.length > 0) setPasswordError('')
        if (phone.length > 0) setPhoneError('')

        if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && phone.length > 0) setMessage('')
    }, [firstName, lastName, email, password, phone])



    return (
        <>
            <div className="container mt-40 flex flex-col bg-gray-100 " >
                <div className="flex shadow-md my-10">
                    <div className="w-full bg-white px-10 py-10">
                        <h3 className="font-semibold text-2xl">Create Account</h3>
                        <p className='text-[20px] ml-[20px] text-neutral-500'>Create your GAMESHAK account to start earning points and rewards today!</p>
                        <p className='text-red-600 text-lg'>{message}</p>

                        <input type='text' placeholder='First Name' className='border-2 border-gray-300 ml-[3px] text-2xl h-[50px] w-[359px] ' onChange={(e) => { setFirstName(e.target.value) }}></input>
                        <p className='text-red-600 text-lg mr-[400px]'>{firstNameError}</p>


                        <input type='text' placeholder='Last Name' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setLastName(e.target.value) }}></input>
                        <p className='text-red-600 text-lg'>{lastNameError}</p>

                        <input type='email' placeholder='Email' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setEmail(e.target.value) }}></input>
                        <p className='text-red-600 text-lg'>{emailError}</p>


                        <input type='password' placeholder='Password' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setPassword(e.target.value) }}></input>
                        <p className='text-red-600 text-lg'>{passwordError}</p>


                        <input type='text' placeholder='Phone' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setPhone(e.target.value) }}></input>
                        <p className='text-red-600 text-lg'>{phoneError}</p>


                        <div className='bg-slate-100 p-10 rounded-xl mt-14'>
                            <input type='checkbox' className='h-[20px] w-[20px] mt-[20px]'></input>
                            <label className='text-[25px] ml-[20px] text-neutral-500'>Keep me signed in</label>
                            <p className='text-neutral-500'>You won't have to sign in as often on this device, only check this box on personal devices.</p>
                            <button onClick={registrationHandler} className='px-8 py-3 m-2 uppercase'>Submit</button>
                            <h3>{registerMessage}</h3>
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

export default SignUpPage



