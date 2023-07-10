'use client'

import { useState } from 'react';
import { CarCardProps } from '@/type'
import Custombutton from './Custombutton';
import Image from 'next/image';
import HeroImage from '../public/hero.png'
import transmission_icon from '../public/steering-wheel.svg'
import gear from '../public/steering-wheel.svg'
import fuel from '../public/gas.svg'
import CarDetails from './CarDetails';



function CarCard({ car }: CarCardProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { city_mpg, cylinders, make, model, transmission, drive } = car;

    return (
        <div className='car-card group md:w-[30%] duration-200'>
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className='flex mt-[15px] h-[40px] items-center text-[30px] font-extrabold'>
                <span className='self-start font-bold text-slate-700 text-[18px]'>₦</span>
                2k5
                <span className='self-end text-slate-700 text-[18px]'>/day</span>
            </p>
            <div className='relative w-full h-[200px] my-3 object-contain'>
                <Image src={HeroImage} alt='car Images' fill priority className='object-contain' />
            </div>

            <div className='relative justify-between w-full mt-4'>
                <div className='flex justify-between w-full group-hover:invisible'>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={transmission_icon} alt='' width={20} height={20} />
                        <p>
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={gear} alt='' width={20} height={20} />
                        <p>
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={fuel} alt='' width={20} height={20} />
                        <p>
                            {`${city_mpg}MPG`}
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <Custombutton
                        title='View Details'
                        containerStyles='w-full bg-blue-200 py-2 border-2 border-blue-900'
                        textStyle="text-blue-900 text-[20px]"
                        handleClick={() => { setIsOpen(true) }} />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => { setIsOpen(false) }} car={car} />
        </div >

    )
}

export default CarCard