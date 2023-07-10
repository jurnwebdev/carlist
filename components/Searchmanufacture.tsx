'use client'
import Image from 'next/image'
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from "@/type"
import { manufacturers } from '@/constants'

import carLogo from '../public/car-logo.svg'

const Searchmanufacture = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

    //filter the Manufacturer query to remove spaces and convert text to lowercase.
    const filteredManufacturer =
        query === "" //if query is empty
            ? manufacturers //display the manufacturer
            : manufacturers.filter((item) => ( //else, filter the manufacturer query to convert text to lower and remove empty spaces
                item.toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            ))

    return (
        <div className="search-manufacturer">
            <Combobox>
                <div className='w-full relative'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src={carLogo} width={20} height={20} className="ml-4"
                            alt='car logo'></Image>
                    </Combobox.Button>

                    <Combobox.Input
                        className='search-manufacturer__input absolute'
                        placeholder='VolksWagen'
                        displayValue={(manufacturer: string) => { return manufacturer }}
                        onChange={(e) => { setQuery(e.target.value); }}
                    />
                    <Transition
                        as={Fragment}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="mt-10">
                            {
                                filteredManufacturer.map((item) => (

                                    <Combobox.Option
                                        key={item}
                                        value={item}
                                        className={({ active }) => `relative search-manufacturer__option rounded-md ${active ? 'bg-blue-900 text-white' : 'text-gray-900'}`}>
                                        {item}
                                    </Combobox.Option>
                                )
                                )
                            }
                        </Combobox.Options>


                    </Transition>

                </div>
            </Combobox >
        </div >
    )
}

export default Searchmanufacture