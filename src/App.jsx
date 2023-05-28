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

	// Organise the weather data into days
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
			<h1>Reacting to the weather</h1>
			<Search userInput={userHasSearched} citySearch={weatherData} />
			{
				searchTerm ? <h2>{searchTerm}</h2> : null
			}
			<div className='cards-container'>
				{
					dailyWeatherData ?
						dailyWeatherData.map((day, index) => {
							return (
								<Card 
									key={index} // Not best practice
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
		</div>
	)
}

export default App
