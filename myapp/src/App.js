
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';

function App() {
  const [cityDetails, setCityDetails] = useState({ lat: '32.0852997', lon: '34.7818064' })


  const [weatherDetails, setWeather] = useState([])

  let apiKey = '9464147537942aef4aba9ac81a7a2d3b'

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityDetails.lat}&lon=${cityDetails.lon}&appid=${apiKey}&units=metric&lang=he`)
  //     .then(res => res.json())
  //     .then((data) => {
  //       setWeather(data)
  //       arrW.push(data)
  //     })
  //     .catch((err) => {
  //       if (err) console.log(err);
  //     })


  // }, [cityDetails])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityDetails.lat}&lon=${cityDetails.lon}&cnt=6&appid=${apiKey}&units=metric&lang=he`)
      .then(res => res.json())
      .then((data) => {
        setWeather([data])


      })
      .catch((err) => {
        if (err) console.log(err);
      })
  }, [cityDetails])





  return (


    < div className="App" >
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage setCityDetails={setCityDetails} weatherDetails={weatherDetails} />} />
        </Routes>
      </HashRouter>

    </div >
  );
}

export default App;
