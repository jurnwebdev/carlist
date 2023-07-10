import { Cars } from "@/type"
import fetchCars from "@/utils"
import CarCard from "./CarCard"

async function CarList() {
  const selectedCars: Promise<Cars> = fetchCars()
  const allCars = await selectedCars

  return (
    <main className="flex flex-col justify-between gap-y-10 p-10 md:flex-row flex-wrap">
      <>
        {
          allCars.map((car: Cars) => (
            <CarCard car={car} />
          ))
        }
      </>
    </main>
  )
}

export default CarList