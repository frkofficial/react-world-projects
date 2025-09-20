import React, { useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    // console.log(country.area.area)

    const [visited, setVisited] = useState(false)

    // evenet handler
    const handleVisited = () => {
        // console.log('button clicked')

        // etar karon state jeno cng korar jai visited to not visited
        // first system
        if (visited) {
            setVisited(false)

        }
        else {
            setVisited(true)
        }

        //2nd system
        // setVisited(visited ? false : true)

        // 3rd system
        // setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name: {country.name.common} </h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;