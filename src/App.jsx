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
		setCurrentWeather(current)
		setDailyWeather(daily)
	}

	let dailyWeatherData = []

	if (dailyWeather) {
		for (let i = 0; i < 7; i++) {
			let eachDay = {}
			for (const weatherData in dailyWeather.daily) {
				const currentItem = dailyWeather.daily[weatherData][i]
				eachDay[weatherData] = currentItem
			}
			dailyWeatherData.push(eachDay)
		}
	}

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
				dailyWeatherData ?
					dailyWeatherData.map((day) => {
						return <p>Time: {day.time}</p>
					})
				:
				null
			}
		</>
	)
}

export default App
