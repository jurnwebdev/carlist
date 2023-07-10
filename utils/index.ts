
export default async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '84a59801afmsh020366b8ac03d72p10dbdbjsn0b3f36e0ae3d',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const cars = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers })
    if (!cars.ok) throw new Error(`Cannot fetch`);
    const data = await cars.json()
    return data

}