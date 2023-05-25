import { useState } from 'react'
import Search from './components/Search'
import './App.css'

function App() {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentWeather, setCurrentWeather] = useState(null)
	const [dailyWeather, setDailyWeather] = useState(null)

	const userHasSearched = (input) => {
		setSearchTerm(input)
	}

	const weatherData = (current, daily) => {
		console.log('weather data function')
		console.log({current, daily})
		setCurrentWeather(current)
		setDailyWeather(daily)
		console.log({currentWeather})
	}

	// Required data: 
    // date, day, condition, temperature, wind speed

	return (
		<>
			<h1>Hello there.</h1>
			<Search userInput={userHasSearched} citySearch={weatherData} />
			{
				searchTerm ? <p>{searchTerm}</p> : null
			}
			{
				currentWeather ? <p>{currentWeather.current_weather.temperature}</p> : null
			}
			{
				// dailyWeather ? 
				// 	dailyWeather.daily.temperature_2m_max.map((temp) => {
				// 		return (
				// 			// Pass the data to a component here
				// 			<div>
				// 				<p>{temp}</p>
				// 			</div>
				// 		)
				// 	})
				// :
				// null
				// dailyWeather ? 
				// 	dailyWeather.daily
				// :
				// null
			}
		</>
	)
}

export default App
