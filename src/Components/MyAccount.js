import { useAuth } from '../Hooks/Auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const MyAccount = ({ wishList, itemToShoppingCartHandler, itemsList }) => {

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
            // console.log(responseJSON.user)
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


    // THIGNS TO IMPROVE ON THIS PAGE: 

    // 1- PROGRAM DOESNT KNOW WHAT TO DO IF THE USER PURCHASE LIST IS EMPTY. THE CHECK DOESNT WORK FOR SOME REASON. 

    // 2- FIND A WAY TO MAP itemsList inside the wishList map so i can access 'product' from mapping itemsList. that way when 'move to cart' gets clicked on user can transfer that product to the shopping cart from the wishlist. 

    // 3- Items in the wishlist have to get put into the data base and linked to each user just like previous purchases. That way the items in the wishList stay in the wishList array once the user signs out. 




    return (
        <div className="container mt-40 flex flex-col bg-gray-100 ">

            <div className="flex shadow-md my-10">
                <div className="w-full bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h2 className='mt-[20px]'>{auth.userEmail}</h2>
                        <div>
                            <button className=' mt-[32px] text-lg cursor-pointer bg-white text-black border-0 underline' onClick={() => { rightSideBarHandler() }}>Wishlist</button>
                        </div>
                        {/* wishlist */}
                        <div className={rightSideBar ? "overflow-y-scroll ease-in duration-300 fixed text-gray-300 right-0 top-0 w-1/2 sm:w-2/3 md:w-3/5 lg:w-2/5 h-screen bg-black/90 px-4 py-7 flex flex-col z-10" : " hidden absolute top-0 h-screen right-[-150%] ease-in duration-500"}>
                            <button className='top-0 left-0 absolute h-8 w-32 mt-10 cursor-pointer bg-[#0090d8] hover:bg-slate-400' onClick={rightSideBarHandler}>Go Back</button>

                            {wishList !== undefined && wishList.map((item, index) => {
                                console.log(item)
                                return (
                                    <div key={index} className='mt-10'>
                                        <h5>{item.title}</h5>
                                        <img src={item.image} className='h-36 w-36' alt='' />
                                        <p>{item.price}</p>
                                        <button className='cursor-pointer mb-10 bg-[#0090d8] hover:bg-slate-400 p-2' /* onClick={itemToShoppingCartHandler(product)} */>Move to Cart</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                    <div>
                        <p className='font-bold'>{userData !== undefined && userData.address}</p>
                        <div className='justify-between'>
                            {/* {console.log(userPurchases.purchases)} */}
                            {console.log(` userPurchases ${userPurchases}`)}

                            {/* LOGIC UNDERNEATH NEEDS WORK. PROGRAM DOESNT KNOW WHAT TO DO IF THE USER PURCHASES IS EMPTY  */}

                            {userPurchases !== null && userPurchases.purchases !== undefined ? userPurchases.purchases.map((purchase, index) => {
                                console.log(purchase)
                                return (
                                    <div key={index} className=''>
                                        <img src={purchase.image} className='w-[220px]' alt='' />
                                        <p className='w-[170px] ml-[43%] mb-[20%]'>{purchase.title}<br />{purchase.brand}<br />{purchase.price}</p>

                                    </div>
                                )
                            }) : <div><h2>No Previous Purchases on Record</h2></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount