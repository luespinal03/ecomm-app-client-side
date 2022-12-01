import { useState, useEffect } from 'react';
import { useAuth } from '../Hooks/Auth';
import './HomePage.css'
import Footer from '../Components/Footer';
import Recommended from '../Components/Recommended'

import xboxImg from '../assets/xbox.jpeg'
import nintendoImg from '../assets/nintendo.jpeg'
import playstationImg from '../assets/playstation.jpeg'
import pokemonImg from '../assets/pokemon.jpeg'
import funkoImg from '../assets/funko.jpeg'
import metaImg from '../assets/meta.jpeg'
import HolidayBanner from '../assets/HolidaySleigh.jpeg'
import razerImg from '../assets/razer.jpeg'
import amdImg from '../assets/amd.jpeg'
import turtleBImg from '../assets/turtleBeach.jpeg'
import newReleases from '../assets/newReleases.jpeg'


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;



const HomePage = () => {
    const [message, setMessage] = useState('');
    const auth = useAuth();

    // When the application is first loading in, react needs to load in the user token from local storage and so we only want to call this fetch function if the user's token is not null. Additionally, when the user is logged out, the token will be null and we want to set the message back to an empty string in this case.
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(`${urlEndPoint}/users/message`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
                },
            });
            const result = await response.json()
            setMessage(result.message)
        }
        if (auth.userToken !== null) {
            fetchMessage()
        }
        if (auth.userToken === null) {
            setMessage("")
        }
    }, [auth.userToken]);

    return (
        <div>
            <div className='main-blade-image mt-20'>
                <img className='w-100 blage-img ls-is-cached lazyloaded' src={HolidayBanner} />
            </div>


            <h2 className='top-brands'>Top Brands</h2>


            <br />
            <section className='overflow-hidden text-gray-700'>
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={xboxImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={playstationImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={nintendoImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={pokemonImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={funkoImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={metaImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={razerImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={turtleBImg} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/3">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={amdImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className='main-blade-image mt-20'>
                <img className='w-100 blage-img ls-is-cached lazyloaded' src={newReleases} />
            </div>


            <h3>{message}</h3>
            <Footer />
        </div>
    )
}

export default HomePage


{/* 
    // < img src = { xboxImg } />
    //             <img src={playstationImg} />
    //             <img src={nintendoImg} />
    //             <img src={pokemonImg} />
    //             <img src={funkoImg} />
    //             <img src={metaImg} />
    //             <img src={razerImg} />
    //             <img src={turtleBImg} /> */}