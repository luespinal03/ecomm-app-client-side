import { useState } from 'react';
import { useAuth } from "../Hooks/Auth";
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
        <div className='bg-white rounded-xl shadow-2xl mt-40 ml-96'>
            <h1>Welcome to GAMESHAK!</h1>
            <label type='text'>Email: </label>
            <input type="email" placeholder='john@doe.com' onChange={(e) => { setEmail(e.target.value) }} className="reg-email"></input>
            <br />
            <label type='text'>Password: </label>
            <input type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} className='reg-password'></input>
            <br />
            <button onClick={registrationHandler} className='px-8 py-3 m-2'>Sign Up</button>
            <h3>{registerMessage}</h3>

        </div>
    )
}

export default RegistrationPage