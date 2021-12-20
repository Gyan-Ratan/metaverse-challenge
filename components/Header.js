import Image from 'next/image';
import React from 'react'
import { useMoralis } from "react-moralis";
import Avatar from './Avatar';
import profile from '/images/profile.jpg'

function Header() {
    const {user}= useMoralis();
    return (
        <div>
           <div>
               <div className='relative h-12 w-12 mx-auto hidden lg:inline-grid'>
                   <Image 
                    layout='fill' 
                    className=' object-cover' 
                    src={profile}
                    />
               </div>
               <div>

                   <div>  
                       {/* avatar */}
                        {/* <Avatar logoutOnPress={}/> */}
                    </div>

                   {/* welcome msg */}
                   {/* username */}

                   {/* change username components */}

               </div>
           </div>
        </div>
    )
}

export default Header
