import React from 'react'
import { CustomFilterProps } from '@/type'

const Customfilter = ({title, styleComponents}:CustomFilterProps) => {
  return (
   <form className='p-2 border-2 border-blue-900 rounded-md'>
    <div className="form-group">
      <label className="control-label">{title}</label>
    </div>

    <div className={`${styleComponents} form-group`}>
      
    </div>
   </form>
  )
}

export default Customfilter