import { useState } from 'react'
import Search from './components/Search'
import Card from './components/Card'
import Image from './components/Image'

function App() {
	const [searchTerm, setSearchTerm] = useState('')
	const [currentWeather, setCurrentWeather] = useState(null)
	const [dailyWeather, setDailyWeather] = useState(null)
	const [showData, setShowData] = useState(false)

	const userHasSearched = (input) => {
		setSearchTerm(input)
	}

	const weatherData = (current, daily) => {
		setCurrentWeather(current)
		setDailyWeather(daily)
	}

	let dailyWeatherData = []

	// Organising the weather data into days
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

	const weatherReset = (option) => setShowData(option)

	const styles = {
		show: {
			display: showData ? 'flex' : 'none'
		}
	} // This isn't the best solution, but it does the job for now.

	return (
		<div className='main-container'>
			<Image />
			<h1>Reacting to the weather</h1>
			<Search userInput={userHasSearched} citySearch={weatherData} reset={weatherReset} /> 
			{
				searchTerm ? <h2 style={styles.show}>{searchTerm}</h2> : null
			}
			<div style={styles.show} className='cards-container'>
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
