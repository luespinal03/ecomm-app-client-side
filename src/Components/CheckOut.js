import { useState, useEffect } from 'react'
import Subtotal from './Subtotal'
import { useNavigate } from "react-router-dom";
import PaymentInfo from './PaymentInfo';



const CheckOut = ({ itemTotals, priceTotals }) => {
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [streetAddressError, setStreetAddressError] = useState('');
    const [zipCodeError, setZipCodeError] = useState('');
    const [cityError, setCityError] = useState('');
    const [stateError, setStateError] = useState('');


    const [firstName, setFirstName] = useState('');
    const [message, setMessage] = useState('');
    const [lastName, setLastName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    // DO NOT INCLDE ON USEEFFECT
    const [optionalAddy, setOptionalAddy] = useState('');
    // DO NOT INCLDE ON USEEFFECT
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [shippingInfoFilled, setShippingInfoFilled] = useState(false);

    const paymentFunctionHandler = () => {
        if (firstName.length < 1) setFirstNameError('First Name is required.');
        if (lastName.length < 1) setLastNameError('Last Name is required.');
        if (streetAddress.length < 1) setStreetAddressError('Please enter a valid Street Address.');
        if (zipCode.length < 1) setZipCodeError('Please enter a valiud Zip Code.');
        if (city.length < 1) setCityError('Please enter a valid City.');
        if (state.length < 1) setStateError('Please enter a valid State.');
        if (firstName.length > 0 && lastName.length > 0 && streetAddress.length > 0 && zipCode.length > 0 && city.length > 0 && state.length > 0) setShippingInfoFilled(true)

        else {
            setMessage('Please fix errors below')
        }
    }



    useEffect(() => {
        if (firstName.length > 0) setFirstNameError('')
        if (lastName.length > 0) setLastNameError('')
        if (streetAddress.length > 0) setStreetAddressError('')
        if (zipCode.length > 0) setZipCodeError('')
        if (city.length > 0) setCityError('')
        if (state.length > 0) setStateError('')

    }, [firstName, lastName, streetAddress, zipCode, city, state])




    const States = [
        '',
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ]

    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shipping</h1>
                        <p className='text-red-600 text-lg'>{message}</p>
                    </div>

                    <input type='text' placeholder='First Name' className='border-2 border-gray-300 ml-[3px] mr-[50px] text-2xl h-[50px] w-[359px] ' onChange={(e) => { setFirstName(e.target.value) }}></input>
                    <p className='text-red-600 text-lg mr-[400px]'>{firstNameError}</p>

                    <input type='text' placeholder='Last Name' className='border-2 border-gray-300 
                    text-2xl h-[50px] w-[359px] ' onChange={(e) => { setLastName(e.target.value) }}></input>
                    <p className='text-red-600 text-lg'>{lastNameError}</p>

                    <input type='text' placeholder='Street Address' className='mt-10 border-2 border-gray-300  text-2xl h-[50px] w-100 ml-2' onChange={(e) => { setStreetAddress(e.target.value) }}></input>
                    <p className='text-red-600 text-lg'>{streetAddressError}</p>


                    <input type='text' placeholder='Apt,Suite, Or Floor (Optional)' className='mt-10 border-2 border-gray-300  text-2xl h-[50px] w-100 ml-2' onChange={(e) => { setOptionalAddy(e.target.value) }}></input>

                    <div >
                        <input text='numeric' maxlength='5' placeholder='Zip Code' className='w-[190px] mt-10 mr-[28px] border-2 border-gray-300 text-2xl h-[50px] ' onChange={(e) => { setZipCode(e.target.value) }}></input>
                        <p className='text-red-600 text-lg'>{zipCodeError}</p>

                        <input type='text' placeholder='City' className=' mt-10 mr-[55px] border-2 border-gray-300 text-2xl h-[50px] w-[190px] ml-2' onChange={(e) => { setCity(e.target.value) }}></input>
                        <p className='text-red-600 text-lg'>{cityError}</p>

                        <label className='text-[25px] text-gray-400'>State</label>
                        <select type='text' className='border-2 border-gray-300 text-2xl h-[60px]  w-60 ml-2 ' onChange={(e) => { setState(e.target.value) }}>
                            {States.map((state) => {
                                return (
                                    <option>{state}</option>)
                            })}
                        </select>
                        <p className='text-red-600 text-lg'>{stateError}</p>
                    </div>
                    <input type='checkbox' className='h-[17px] w-[17px] mt-[15px] mr-[5px]'></input>
                    <label className='text-[20px] mr-[560px] text-black'>Use as billing address</label>
                    <button className="bg-red-500 hover:bg-red-600 px-7 py-2 text-lg text-white uppercase w-[250px] ml-[500px] mt-[20px]" onClick={() => { paymentFunctionHandler() }}>save & continue</button>
                </div>
                <Subtotal itemTotals={itemTotals} priceTotals={priceTotals} />
            </div>
            {shippingInfoFilled && <div>
                <PaymentInfo />
            </div>}

        </div>
    )
}

export default CheckOut

