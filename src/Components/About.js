import React from 'react'
import { images } from '../constants'
import { useNavigate } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub, FaTwitter, } from 'react-icons/fa'




const myInfo = {
    name: 'Luis Espinal',
    role: 'GAMESHAK creator',
    image: images.profilepic,
    githubURL: 'https://github.com/luespinal03',
    twitterURL: 'https://twitter.com/Javanoob03',
    linkedinURl: 'https://www.linkedin.com/in/luis-espinal-440489165/'
}




const About = () => {

    const navigate = useNavigate();

    return (

        <div className='w-screen h-screen'>
            <div className='w-full mt-60 bg-slate-900 text-gray-300 py-y px-2' id='footer'>
                <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                    <img src={myInfo.image}></img>
                    <p className='text-xl'>{myInfo.name}
                        <br />
                        <h5>{myInfo.role}</h5>
                    </p>

                    <div>
                        <p>Software Engineering student at Code Immersives. US Army Vet</p>
                        <p>'I love video games, therefore building a copy of Gamestop for my final projet was a no brainer'</p>
                    </div>
                </div>

                <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                    <p className='py-4'>2022 GAMESHAK, LLC. All rights reserved</p>
                    <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>

                        <a className='h-0 w-0 text-white hover:bg-gray' href={myInfo.linkedinURl}><AiFillLinkedin /></a>
                        <a className='h-0 w-0 text-white' href={myInfo.twitterURL}><FaTwitter /></a>
                        <a className='h-0 w-0 text-white' href={myInfo.githubURL}><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About