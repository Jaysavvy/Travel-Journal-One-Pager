import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Component/Header'
import MainTrips from './Component/MainTrips'
import Data from './data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const tripsElement = Data.map(trip => {
    return < MainTrips 
      trip={trip}
    // imageUrl={trips.imageUrl}
    // location={trips.location}
    // googleMapsUrl={trips.googleMapsUrl}
    // title={trips.title}
    // startDate={trips.startDate}
    // endDate={trips.endDate}
    // description={trips.description}
    />
  }) 
  return (
    <>
    <Header/>
    {tripsElement}
    </>
  )
}

export default App
