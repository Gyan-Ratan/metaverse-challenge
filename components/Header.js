import Image from 'next/image';
import React from 'react'
import { useMoralis } from "react-moralis";
import Avatar from './Avatar';
import ChangeUsername from '/components/ChangeUsername';
import profile from '/images/profile.jpg'
import ChangeUsername from '/components/ChangeUsername'

function Header() {
    const {user}= useMoralis();
    return (
        <div className='sticky top-0 p-5 z-50 bg-black shadow-sm  text-pink-500 border-pink-700'>
           <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
               <div className='relative h-12 w-12 mx-auto hidden lg:inline-grid'>
                   <Image 
                    layout='fill' 
                    className='rounded-full object-cover' 
                    src={profile}
                    />
               </div>
               <div className='col-span-4 text-left lg:text'>

                   <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>  
                       {/* avatar */}
                        {/* <Avatar logoutOnPress/> */}
                    </div>

                   {/* welcome msg */}
                   <h1 className='text-3xl'>Welcome to New Gen chat app</h1>
                   <h2 className='text-5xl font-bold truncate'>{user.getUsername('')}</h2>
                   {/* username */}

                   {/* change username components */}
                    <ChangeUsername />
               </div>
           </div>
        </div>
    )
}

export default Header
