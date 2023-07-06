'use client'

import Custombutton from "./Custombutton"
import NavMenu from "@/components/NavMenu"

const Header = () => {
  return (
   <header className='flex justify-between items-center px-10 py-6 fixed z-10 w-full bg-white shadow-sm'>
    <div className="text-[40px] font-semibold font-sans">Car<span className='font-bold uppercase text-blue-900'>List</span></div>
    <NavMenu />
    <Custombutton 
    title="Signin"
    containerStyles={`bg-slate-100 text-slate-900 px-6 py-2 border-2 border-blue-900 rounded-md hover:bg-blue-900 hover:border-blue-900 hover:text-slate-100`}
    btnType='button'
    />
   </header>
  )
}

export default Header