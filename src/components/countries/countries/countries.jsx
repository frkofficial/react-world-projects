


import React, { use, useState } from 'react'; //automatic ashe na keno?
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    // koyta country te gese sheta count rakhar jonno
    const [visitedCountries, setVisitedCountries] = useState([])

    // to add flag
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clicked', country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handlevisitedFlags = (flag) => {
        // console.log('flag needs to be added', flag)
        const newVisitedFlag = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlag)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    return (
        <div>
            <h1>In the countries: {countries.length} </h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>
            {
                visitedCountries.map(country =><li
                key={country.cca3.cca3}>{country.name.common}</li>)
            }
            <div className='visited-flags-container'>
                {
                  visitedFlags.map((flag , index)=> <img key={index} src={flag}></img>)  
                }
            </div>

            {/* ui te name gula anar jonno */}
            <div className='countries' >
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3} country={country}
                        handleVisitedCountries ={handleVisitedCountries}
                        handlevisitedFlags={handlevisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;