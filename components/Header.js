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
                    className=' object-cover' 
                    src={profile}
                    />
               </div>
               <div>

                   <div className='relative h-48 w-48 lg:mx-auto border-pink-400 border-8 rounded-full'>  
                       {/* avatar */}
                        {/* <Avatar logoutOnPress/> */}
                    </div>

                   {/* welcome msg */}
                   <h1 className='text-3xl'>Welcome to New Gen chat app</h1>
                   <h2>{user.getUsername('')}</h2>
                   {/* username */}

                   {/* change username components */}
                    <ChangeUsername />
               </div>
           </div>
        </div>
    )
}

export default Header
