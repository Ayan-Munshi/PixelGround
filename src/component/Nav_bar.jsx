import React from 'react'
import { FcSearch } from "react-icons/fc";


function Nav_bar() {
  return (
    <div className=' flex text-white bg-gray-700 h-[80px] w-full justify-between p-1 sticky top-0 z-[100]'>

      <img src="https://img.freepik.com/premium-vector/pixel-logo-with-letter-p-black-background_853558-1718.jpg" alt=""
      className=' object-cover rounded-3xl' />

      <div className='flex w-[500px] md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 my-2 rounded-2xl'> 
       <input type="text" className=" h-[100%] w-[100%] px-2 py-2 rounded-2xl border border-black focus:outline-none focus:border-blue-500 "
       placeholder='Search here.....'
       />
       <FcSearch className='size-10 mt-2' />
      </div>
      
      <div className=' bg-transparent'>
        icons
      </div>
       

    </div>
  )
}

export default Nav_bar
