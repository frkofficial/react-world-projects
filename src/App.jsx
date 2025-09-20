import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/countries/countries'

function App() {
  
  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

  return (
    <>
      
      <Suspense fallback={<p>Nadir Loading</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
