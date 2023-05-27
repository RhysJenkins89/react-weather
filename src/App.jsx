import { useState } from 'react'
import Search from './components/Search'
import Card from './components/Card'

function App() {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentWeather, setCurrentWeather] = useState(null)
	const [dailyWeather, setDailyWeather] = useState(null)

	const userHasSearched = (input) => {
		setSearchTerm(input)
	}

	const weatherData = (current, daily) => {
		setCurrentWeather(current)
		setDailyWeather(daily)
	}

	let dailyWeatherData = []

	if (dailyWeather) {
		for (let i = 0; i < 5; i++) {
			let eachDay = {}
			for (const weatherData in dailyWeather.daily) {
				const currentItem = dailyWeather.daily[weatherData][i]
				eachDay[weatherData] = currentItem
			}
			dailyWeatherData.push(eachDay)
		}
	}

	// console.log(dailyWeatherData)
	// console.log(currentWeather)

	return (
		<div className='main-container'>
			<h1>Hello there.</h1>
			<Search userInput={userHasSearched} citySearch={weatherData} />
			{
				searchTerm ? <p>Location: {searchTerm}</p> : null
			}
			{
				dailyWeatherData ?
					dailyWeatherData.map((day) => {
						return (
							<Card 
								date={day.time} 
								maxTemp={day.temperature_2m_max}
								minTemp={day.temperature_2m_min} 
								windSpeed={day.windspeed_10m_max}
								current={currentWeather.current_weather}
							/>
						) 
					})
				:
				null
			}
		</div>
	)
}

export default App
