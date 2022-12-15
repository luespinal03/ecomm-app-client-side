import { useAuth } from '../Hooks/Auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const MyAccount = ({ wishList }) => {

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

    const [rightSideBar, setRightSideBar] = useState(false)

    const rightSideBarHandler = () => {
        setRightSideBar(!rightSideBar)
    }



    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">

            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h2 className='mt-[20px]'>{auth.userEmail}</h2>
                        <div>
                            <button className='text-m cursor-pointer bg-white text-black border-0 underline' onClick={() => { rightSideBarHandler() }}>Wishlist</button>
                        </div>


                        <div className={rightSideBar ? "overflow-y-scroll ease-in duration-300 fixed text-gray-300 right-0 top-0 w-1/2 sm:w-2/3 md:w-3/5 lg:w-2/5 h-screen bg-black/90 px-4 py-7 flex flex-col z-10" : " hidden absolute top-0 h-screen right-[-150%] ease-in duration-500"}>
                            <button className='top-0 left-0 absolute h-8 w-32 mt-10 cursor-pointer' onClick={rightSideBarHandler}>Go Back</button>

                            {wishList !== undefined && wishList.map((item, index) => {
                                console.log(item)
                                return (
                                    <div key={index} className='mt-10'>
                                        <h5>{item.title}</h5>
                                        <img src={item.image} className='h-36 w-36' />
                                    </div>
                                )
                            })}
                        </div>


                        {/* {wishList !== undefined && wishList.map((item, index) => {
                            console.log(item)
                            return (
                                <div key={index}>
                                    <img src={item.image} />
                                    <p></p>
                                </div>
                            )
                        })} */}
                    </div>
                    <div>
                        <p className='font-bold'>{userData.address}</p>
                        <div className='justify-between'>
                            {userPurchases.purchases !== undefined && userPurchases.purchases.map((purchase, index) => {
                                console.log(purchase)
                                return (
                                    <div key={index}>
                                        <img src={purchase.image} className='w-[220px]' />
                                        <p className='w-[170px] ml-[43%] mb-[20%]'>{purchase.title}</p>
                                        <p>{purchase.price}</p>
                                    </div>
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