import Image from 'next/image';
import React from 'react'
import { useMoralis } from "react-moralis";
import Avatar from './Avatar';
import profile from '/images/profile.jpg'

function Header() {
    const {user}= useMoralis();
    return (
        <div className='text-pink-500'>
           <div>
               <div className='relative h-12 w-12 mx-auto hidden lg:inline-grid'>
                   <Image 
                    layout='fill' 
                    className='rounded-full object-cover' 
                    src={profile}
                    />
               </div>
               <div className='text-left lg:text'>

                   <div className='relative h-48 w-48 lg:mx-auto border-pink-400 border-8 rounded-full'>  
                       {/* avatar */}
                        {/* <Avatar logoutOnPress/> */}
                    </div>

                   {/* welcome msg */}
                   <h1 className='text-3xl'>Welcome to New Gen chat app</h1>
                   <h2 className='text-5xl font-bold truncate'>{user.getUsername('')}</h2>
                   {/* username */}

                   {/* change username components */}

               </div>
           </div>
        </div>
    )
}

export default Header
