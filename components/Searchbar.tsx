'use client'
import { useState } from "react"
import Searchmanufacture from "./Searchmanufacture"


const Searchbar = () => {
  const [manufacturer, setManufacturer] = useState('')

  const handleSearch = () => { }

  return (

    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Searchmanufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer} />
      </div>
    </form>
  )
}

export default Searchbar