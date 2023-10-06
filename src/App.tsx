import { useState } from 'react'
import './App.scss'
import GetWeather from './GetWeather/GetWeather'

function App() {
  
  const [weather, setWeather] = useState({
    temperature: 0,
    weatherDescription: ''
  })
  const [buttonClicked, setButtonClicked] = useState(false);
  const[inputValue, setInputValue] = useState('')
  const [city, setCity] = useState('')

  async function getWeather() {
    try {
      const newWeather = await GetWeather(city)
      if (newWeather) {
        setWeather(newWeather)
      }
    } catch (error) {
      console.error('error fetching data', error)
    }
    setCity(inputValue)
    setButtonClicked(true)
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='Container'>
      <div className='main'>
        <div className='Search'>
          <input className='my-input'
            type="text"
            placeholder='Your state'
            value={inputValue}
            onChange={changeHandler} />
          <button className='my-btn' onClick={getWeather}>Get the weather</button>
        </div>

        <div className='Data'>
          {buttonClicked && weather ? ( // Only display when buttonClicked is true and weather data is available
            <>
              <h2>Today</h2>
              <h1>{city}</h1>
              <p className='temp'>Temperature: {weather.temperature}</p>
              <p className='weather'>{weather.weatherDescription}</p>
            </>
          ) : (
            buttonClicked && 'Did not find this city'
          )}
        </div>
      </div>
    </div>
  )
}

export default App
