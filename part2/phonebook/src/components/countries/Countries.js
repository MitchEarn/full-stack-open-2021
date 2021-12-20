import React, {useEffect, useState} from "react";
import axios from "axios";
import CountryDetails from "./CountryDetails";

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [selectedCountry, setSelectedCountry] = useState(undefined)


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])




    const handleFilter = (event) => {
        setSearch(event.target.value)
        setSelectedCountry(undefined)
    }

    const handleClick = (country) => {
       setSelectedCountry(country)
    }


    const countrySearch = (countries) => {
        const filteredCountries = countries.filter(c => (c.name.common).toLowerCase().includes(search.toLowerCase()))
        if (filteredCountries.length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (filteredCountries.length > 1) {
            return filteredCountries.map(country =>
                <p>{country.name.common}<button onClick={() => handleClick(country)}>show</button></p>)
        } else if (filteredCountries.length === 1) {
            return <CountryDetails country={filteredCountries[0]}/>
        }


    }

    return (
        <>
            <div>
                find countries <input value={search} onChange={handleFilter}/>
            </div>
            <div>
                {countrySearch(countries)}
            </div>
            {selectedCountry ? <CountryDetails country={selectedCountry}/> : <></>}
        </>
    )
}

export default Countries


