import { useState } from 'react';
import { useAuth } from "../Hooks/Auth";
import Footer from '../Components/Footer'
import { useNavigate } from "react-router-dom";
import './SignUpPage.css'

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    const registrationHandler = async () => {
        const registerResult = await auth.register(email, password);
        if (registerResult.success) {
            navigate("/login");
        }
        if (!registerResult.success) {
            setRegisterMessage(registerResult.message);
        }
    }



    return (
        <div>
            <div div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black mt-40 ml-96' >
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <h3 className='font-bold text-2xl my-6 '>Welcome to GAMESHAK!</h3>
                        <label type='text'>Email: </label>
                        <br />
                        <input type="email" placeholder='john@doe.com' onChange={(e) => { setEmail(e.target.value) }} className="reg-email"></input>
                        <br />
                        <label type='text'>Password: </label>
                        <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='reg-password'></input>
                        <br />
                        <br />
                        <div className='bg-slate-100 p-10 rounded-xl mt-14'>
                            <button onClick={registrationHandler} className='px-8 py-3 m-2'>Sign Up</button>
                            <h3>{registerMessage}</h3>
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

export default RegistrationPage



    // < div className = 'bg-white rounded-xl shadow-2xl mt-40 ml-96' >
    //         <h1>Welcome to GAMESHAK!</h1>
    //         <label type='text'>Email: </label>
    //         <input type="email" placeholder='john@doe.com' onChange={(e) => { setEmail(e.target.value) }} className="reg-email"></input>
    //         <br />
    //         <label type='text'>Password: </label>
    //         <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='reg-password'></input>
    //         <br />
    //         <button onClick={registrationHandler} className='px-8 py-3 m-2'>Sign Up</button>
    //         <h3>{registerMessage}</h3>

    //     </div >