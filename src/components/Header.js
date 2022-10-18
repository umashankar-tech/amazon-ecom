import React from 'react'
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <header>
{/* top nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
          <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
            <Image src="https://links.papareact.com/f90" width={150} height={40} objectFit="contain" className='cursor-pointer'/>
          </div>
          {/* search */}
          <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input className="p-2 h-full w-5 flex-shrink flex-grow rounded-l-md focus:outline-none  px-4" type="text"/>
           <SearchIcon className="h-12 w-11 p-3 " />
          </div>
          {/* right side of header */}
          <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap '> 
          <div className='link' >
            <p> Hello Umashankar </p>
            <p className="font-extrabold md:text-sm"> Account & list  </p>

          </div>
          <div className='link'>
          <p> Retruns</p>
            <p>& Orders </p>
          </div>
          <div className=' relative link flex items-center' >
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">0 </span>
         <ShoppingCartIcon className='link h-10' />
         <p className=" hidden md:inline font-extrabold md:text-sm mt-1"> Basket</p>
          </div>
          
          </div>
        
      </div>
  {/* bottom nav */}
      <div className="flex items-center space-x-2 p-1 pl-3 bg-amazon_blue-light text-white text-sm">
      <p classname="link flex items-center">
        <MenuIcon className=" mr-1"/>
        All
      </p>
      <p className="link"> Prime video </p>
      <p className="link"> Amazon Business </p>
      <p className="link">Today's Deals </p>
      <p className="link hidden lg:inline-flex"> Electronics </p>

      </div>

    </header>
  )
}

export default Header