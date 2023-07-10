'use client'
import Image from "next/image"
import Custombutton from "./Custombutton"
import HeroImage from '../public/hero.png'

const Hero = () => {
  const handleClick = () => { }
  return (
    <main className="pt-[160px] pb-[50px] flex flex-wrap px-10 md:justify-between md:items-center">
      <div className="flex flex-col w-full md:w-[40%]">
        <div className="text-[60px] font-bold leading-[65px] text-blue-900">
          Find, Book or Rent a car
        </div>
        <div className="hero__subtitle text-blue-200">
          Streamline your car rental experience with easy to use and swift filter
        </div>
        <Custombutton
          title="Discover Cars"
          containerStyles="mt-4 bg-blue-200 border-blue-900 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md hover:border-blue-900 p-4 w-[250px] hover:translate-y-2 ease-in-out duration-200"
          textStyle="text-blue-900 text-[20px]"
          handleClick={handleClick} />
      </div>
      <div className="flex flex-col w-full md:w-[50%] mt-[80px]">
        <Image
          src={HeroImage}
          alt="hero image"
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  )
}

export default Hero