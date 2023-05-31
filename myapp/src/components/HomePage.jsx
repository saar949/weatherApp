import React, { useState } from 'react'

export default function HomePage(props) {
    const [cityName, setCityName] = useState('')
    let apiKey = '9464147537942aef4aba9ac81a7a2d3b'


    const searchCity = () => {

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},Israel&1=5&appid=${apiKey}`)
            .then((res) => res.json())
            .then((date) => {
                date.forEach((val) => {
                    props.setCityDetails({ lat: val.lat, lon: val.lon })

                })

            })
            .catch((err) => {
                if (err) console.log(err)
            })



    }






    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => { setCityName(e.target.value) }} />
            <button onClick={searchCity}>search</button>
            {/* <div>
                <h1>{props.weather[0].city.name} {props.weather[0].city.country}</h1>
                <p> temp  {props.weather[0].list[0].main.temp}</p>
                <p>feels like {props.weather[0].list[0].main.feels_like}</p>
                <p>description{props.weather[0].list[0].weather.description}</p>
            </div> */}
            {props.weatherDetails.map((val, index) => {
                return <div>
                    <h1>{val.city.name} {val.city.country}</h1>
                    <p>temp {val.list[index].main.temp}</p>
                    <p>feels like {val.list[index].main.feels_like}</p>
                    <p>description {val.list[index].weather[index].description}</p>
                </div>
            })}




        </div>
    )
}
