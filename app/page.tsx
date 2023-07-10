import Customfilter from '@/components/Customfilter'
import Hero from '@/components/Hero'
import CarList from '@/components/CarList'
import Searchbar from '@/components/Searchbar'
import Searchcontent from '@/components/Searchcontent'


export default function Home() {

  return (
    <>
      {/* Hero section start */}
      <Hero />
      {/* Hero section end */}

      {/* Filter section start */}
      <div className=" flex flex-col p-10 md:p-16 bg-blue-200 mb-10">

        <Searchcontent
          title={`Search with Precision`}
          description={`Built in custom filter to ease your search.`}
        />

        <div className='flex justify-between items-center mt-4'>
          <Searchbar />
        </div>

        <div className='flex justify-start items-center gap-4 mt-[70px]'>
          <Customfilter title='Filter us with this' />
          <Customfilter title='filter' />
        </div>
      </div>
      {/* Filter section end */}

      {/* List cars section */}
      <CarList />
      {/* List cars end */}
    </>
  )
}
