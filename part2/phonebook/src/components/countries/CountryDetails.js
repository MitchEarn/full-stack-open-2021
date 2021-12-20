import React, {useEffect, useState} from "react";
import axios from "axios";

const CountryDetails = ({country}) => {

    const [weather, setWeather] = useState()

    const apiKey = process.env.REACT_APP_API_KEY

    // Currently trying to stop useEffect from infinte renders. Up to exercise 2.14
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&units=metric&appid=${apiKey}`)
            .then(response => {
                setWeather(response.data)
            })
        console.log(weather)
    }, [country])


    const languages = []
    Object.entries(country.languages).forEach(([value]) => languages.push(value))

    const renderWeather = (weather) => {
        if (weather) {
            return (
                <>
                    <p>{weather.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                         alt={'picture of current weather'}/>
                    <p>Temperature: {weather.main.temp} degrees Celcius</p>
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <>
            <h2>{country.name.common}</h2>

            <p>Capital: {country.capital[0]} <br/> Population: {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {languages.map(language => <li>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={`${country.name.common} flag`}/>
            <h3>Weather in {country.capital[0]}</h3>
            {renderWeather(weather)}
        </>

    )
}

export default CountryDetails