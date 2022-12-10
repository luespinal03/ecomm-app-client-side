import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



const PaymentInfo = () => {

    const [message, setMessage] = useState('');
    const [creditCardError, setCreditCardError] = useState('');
    const [expirationDateError, setExpirationError] = useState('');
    const [cWError, setCwError] = useState('');

    const [creditCardNumbers, setCreditCardNumbers] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cW, setCw] = useState('');


    const [paymentInformationFilled, setPaymentInformationFilled] = useState(false);
    const navigate = useNavigate();


    const paymentFunctionHandler = () => {
        if (creditCardNumbers.length < 1) setCreditCardError('Please fill in Card Number');
        if (expirationDate.length < 1) setExpirationError('Please fill in Exp. Date');
        if (cW.length < 1) setCwError('Please fill in CW');

        if (creditCardNumbers.length > 0 && expirationDate.length > 0 && cW.length > 0) {
            setPaymentInformationFilled(true)
            navigate('/revieworderpage')
        }
        else {
            setMessage('Please fill up required information')
        }
    }


    useEffect(() => {
        if (creditCardNumbers.length > 0) setCreditCardError('');
        if (expirationDate.length > 0) setExpirationError('');
        if (cW.length > 0) setCwError('');
        if (creditCardNumbers.length > 0 && expirationDate.length > 0 && cW.length > 0) setMessage('');
    }, [creditCardNumbers, expirationDate, cW])



    return (
        <div className="container mt-40 flex flex-col bg-gray-100 w-1/4">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Payment</h1>
                        <p className='text-red-600 text-lg'>{message}</p>
                    </div>
                    <input type='text' placeholder='Card Number' className='border-2 border-gray-300 ml-[9px]  text-2xl h-[50px] w-[600px]' onChange={(e) => { setCreditCardNumbers(e.target.value) }}></input>
                    <p className='text-red-600 text-lg'>{creditCardError}</p>

                    <input type='text' placeholder='Exp. Date(MM/YY)' className='mt-10 border-2 border-gray-300 text-2xl h-[50px] w-[400px] ml-2 ' onChange={(e) => { setExpirationDate(e.target.value) }}></input>
                    <p className='text-red-600 text-lg'>{expirationDateError}</p>

                    <input type='text' placeholder='CW' className='mt-10 border-2 border-gray-300 text-2xl h-[50px] w-[400px] ml-2 mr-[322px] ' onChange={(e) => { setCw(e.target.value) }}></input>
                    <p className='text-red-600 text-lg'>{cWError}</p>

                    <input type='checkbox' className='h-[17px] w-[17px] mt-[15px] mr-[10px]'></input>
                    <label className='text-[20px] mr-[930px] text-black'>Use as billing address</label>
                    <button className="bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-[250px] ml-[800px] mt-[20px]" onClick={() => { paymentFunctionHandler() }}>save & continue</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentInfo