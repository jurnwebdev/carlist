'use client'
import Image from "next/image"
import Custombutton from "./Custombutton"
import HeroImage from '../public/hero.png'

const Hero = () => {
  const handleClick = () => {}
  return (
    <main className="flex flex-col md:flex-row bg-red-200 pt-[200px]">
      <div className="flex-1  padding-x">
        <div className="text-[60px] font-bold leading-[65px] text-blue-900">
          Find, Book or Rent a car
        </div>
        <div className="hero__subtitle text-blue-950">
            Streamline your car rental experience with easy to use and swift filter
        </div>
        <Custombutton
        title="Discover Cars" 
        containerStyles="mt-4 bg-blue-900 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md hover:border-blue-900 p-4"
        handleClick={handleClick}/>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
        <Image
                  src={HeroImage}
                  alt="hero image"
                  style={{objectFit: "contain"}}
                />
        </div>
      </div>
    </main>
  )
}

export default Hero