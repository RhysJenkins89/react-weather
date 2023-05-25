import {useState} from 'react'

function Search({userInput, citySearch}) { 
    const [isLoading, setIsLoding] = useState(true)
    const [text, setText] = useState('')
    const [userSearch, setUserSearch] = useState('')

    const handleChange = async (event) => {
        setText(event.target.value)
        if (event.target.value.length >= 1) {
            const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${event.target.value}&count=10`)
            const resData = await response.json()
            console.log(resData)
            setUserSearch(resData)
        } else {
            setText('')
            setUserSearch('')
        }
    } 

    const handleButtonClick = (event) => {
        if (!text) {
            // show an alert or similar
        } else {
            event.preventDefault()
            userInput(text)
            setText('')
        }
    }

    const getTotalWeatherData = async (lat, long) => { 
        const [responseCurrent, responseDaily] = await Promise.all([
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`),
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&timezone=auto&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max`)
        ])
        const [currentData, dailyData] = await Promise.all([
            responseCurrent.json(),
            responseDaily.json()
        ])
        citySearch(currentData, dailyData)
    } 

    // Note that we don't actually need the search button

    return (
        <form>
            <input value={text} onChange={handleChange} />
            <button onClick={handleButtonClick}>Search</button>
            {
                userSearch.results ?    
                    userSearch.results.map((item) => {
                        return (
                            <div onClick={() => getTotalWeatherData(item.latitude, item.longitude)} key={item.id}>
                                <p>{item.name}, {item.country}</p>
                            </div>
                        )
                    })
                : 
                    null
            }
        </form>
    )
}

export default Search