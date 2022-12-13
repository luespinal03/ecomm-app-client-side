import { useAuth } from '../Hooks/Auth'
import { useEffect, useState } from 'react'


const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const MyAccount = () => {

    const [userData, setUserData] = useState({});
    const [userPurchases, setUserPurchases] = useState([]);


    useEffect(() => {

        const newUserData = async () => {


            const url = `${urlEndpoint}/users/userinfo`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: auth.userEmail,
                }),
            })
            const responseJSON = await response.json();
            console.log(responseJSON.user)
            setUserData(responseJSON.user)
            setUserPurchases(responseJSON.userPurchases)

        }
        newUserData()

    }, [])


    const auth = useAuth()
    // console.log(auth)
    console.log(userPurchases)
    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">
            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className='mt-[20px]'>{auth.userEmail}</h1>
                    </div>
                    <div>
                        <p className='font-bold'>{userData.address}</p>
                        <div className='justify-between'>
                            {userPurchases.purchases !== undefined && userPurchases.purchases.map((purchase, index) => {
                                console.log(purchase)
                                return (
                                    <>
                                        <img src={purchase.image} className='w-[120px]' />
                                        <p key={index} className='justify-center'>{purchase.title}</p>
                                        <p>{purchase.price}</p>

                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyAccount