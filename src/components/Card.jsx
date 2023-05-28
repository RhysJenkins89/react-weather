import wmoCodes from '../data/wmo-weather-codes'
import { BsSun } from 'react-icons/bs'
import { AiOutlineCloud } from 'react-icons/ai'
import { BsCloudFog } from 'react-icons/bs'
import { BsCloudRain } from 'react-icons/bs'
import { BsCloudSnow } from 'react-icons/bs'
import { IoThunderstormOutline } from 'react-icons/io5'

function Card({ date, maxTemp, minTemp, windSpeed, current }) {
    const averageTemp = (maxTemp + minTemp) / 2

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const dateText = new Intl.DateTimeFormat('en-GB', dateOptions).format(new Date(date));

    const getWeathericon = (weatherCode, size) => {
        switch (weatherCode) {
            case 0: case 1:
                return <BsSun size={size} />
            case 2: case 3:
                return <AiOutlineCloud size={size} /> 
            case 45: case 48:
                return <BsCloudFog size={size} />   
            case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:      
                return <BsCloudRain size={size} />
            case 71: case 73: case 75: case 77: case 85: case 86: 
                return <BsCloudSnow size={size} />
            case 95: case 96: case 99:
                return <IoThunderstormOutline size={size} />      
            default: 
                return <p>Default case</p>
        }
    }

    return (
        <div className="card">
            <p>{dateText}</p>
            {getWeathericon(current.weathercode, 50)}
            <p>Description: {wmoCodes.hasOwnProperty(current.weathercode) ? wmoCodes[current.weathercode] : null}</p>
            <p>Average temperature: {averageTemp.toFixed(0)} &deg;C</p>
            <p>Windspeed: {windSpeed.toFixed(0)} kph</p>
        </div>
    )
}

export default Card