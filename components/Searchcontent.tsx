import React from 'react'
import { SearchTitleProps } from '@/type'

const Searchcontent = ({title, description}:SearchTitleProps) => {
  return (
   <>
    <h1 className='text-[40px] font-bold'>{title}</h1>
        <p className='text-[20px]'>{description}</p>
        </>
  )
}

export default Searchcontent