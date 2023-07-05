'use client'
import Image from "next/image"
import Custombutton from "./Custombutton"

const Hero = () => {
  const handleClick = () => {}
  return (
    <main className="hero">
      <div className="flex-1 pt-36 padding-x">
        <div className="text-[60px] font-bold leading-[65px]">
          Find, Book or Rent a car
        </div>
        <div className="hero__subtitle">
            Streamline your car rental experience with easy to use and swift filter
        </div>
        <Custombutton
        title="Discover Cars" 
        containerStyles="mt-4 bg-blue-900 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md hover:border-blue-900 p-4"
        handleClick={handleClick}/>
      </div>
    </main>
  )
}

export default Hero