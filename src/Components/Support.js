import React from 'react';
import Footer from './Footer';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
    return (

        <div className='w-full mt-[81px]'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>

            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Needing a solution to an issue?</h3>
                    <p className='py-4 text-2xl text-slate-300'>Here at GAMESHAK we make customer service one of our top priorities. We know how stressful it can be to need help with an order. Therefore, we have custoemr service reps 24/7 working around the clock to facilitate you with your needs. Wether you are pulling an all nighter and need a certain game to distract you from the real world, or just simply hanging out with friends. Here at GAMESHAK we got your back. </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>Our sales team consists of over 100 experienced professionals ready to help you with your inquiries. From the simpliest to the most complicated issues, here at GAMESHAK we got your back</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 rounded-xl'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-12'>
                            <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>GAMESHAK was built by games for gamers, we know how crucial it is to get help with issues after a long day of work. So hit us up !</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 rounded-xl'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>Contact us for any Media Inquiries you may need. in case you havent heard, here at GAMESHAK we got your back !</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4 rounded-xl mt-14'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-0 w-100'>
                <Footer />
            </div>



        </div>

    );
};

export default Support;