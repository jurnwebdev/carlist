'use client'
import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { Dialog } from '@headlessui/react'
import { CarDetailsProps } from '@/type'
import Image from 'next/image'
import Link from 'next/link'

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
    return (

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
                </Transition.Child>

                <div className='w-full p-10 h-[100vh] flex justify-center items-center'>
                    <Dialog.Panel className="relative  overflow-y-auto transform rounded-2xl bg-slate-300 w-full h-[60vh] p-4">

                        <div className="w-full flex justify-end bg-[url('/pattern.png')] h-[200px]">
                            <button type="button" className="bg-white self-start rounded-full p-2 hover:bg-blue-300 transition-all duration-200" onClick={closeModal}>
                                <Image
                                    src="/close.svg"
                                    width={15}
                                    height={15}
                                    alt='close modal button'>
                                </Image>
                            </button>

                        </div>
                        <Image src='/hero.png' width={300} height={200} alt='Car car'></Image>
                        <div className='w-full h-auto p-4'>
                            {
                                Object.entries(car).map(([key, value]) => (
                                    <div className=' flex justify-between' key={key}>
                                        <p>{key}</p>
                                        <h1> {value}</h1></div>
                                ))
                            }

                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog >
        </Transition >
    )
}

export default CarDetails