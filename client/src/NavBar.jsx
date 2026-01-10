import React from 'react'

import {House, Search} from 'lucide-react'

const NavBar = () => {
  return (
    <div className='h-15 bg-gray-950 flex w-full justify-around'>
        <div className='p-2 ml-3'>
            <House color='white' size={38}/>
        </div>
        <div className='flex p-3 bg-gray-800 mt-2 mb-2 rounded-2xl'>
            <input type="search" className='bg-gray-800 border-hidden  text-gray-50 p-3' placeholder='search here'/><Search color='white' className=''/>
        </div>
        <div className='hidden sm:flex  text-white p-3 gap-3'>
            <p>Home</p>
            <p>About</p>
            <p>Profile</p>
        </div>
        <div className='h-12 w-12  mt-2 rounded-[50%] bg-gray-500'>

        </div>
      
    </div>
  )
}

export default NavBar
