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
                return <BsSun className='icon' size={size} color='white' />
            case 2: case 3:
                return <AiOutlineCloud className='icon' size={size} color='white' /> 
            case 45: case 48:
                return <BsCloudFog className='icon' size={size} color='white' />   
            case 51: case 53: case 55: case 56: case 57: case 61: case 63: case 65: case 66: case 67: case 80: case 81: case 82:      
                return <BsCloudRain className='icon' size={size} color='white' />
            case 71: case 73: case 75: case 77: case 85: case 86: 
                return <BsCloudSnow className='icon' size={size} color='white' />
            case 95: case 96: case 99:
                return <IoThunderstormOutline className='icon' size={size} color='white' />      
            default: 
                return <p>No data available</p>
        }
    }

    return (
        <div className="card">
            <h3>{dateText}</h3>
            {getWeathericon(current.weathercode, 75)}
            <div className='text-container'>
                <p>{wmoCodes.hasOwnProperty(current.weathercode) ? wmoCodes[current.weathercode] : null}</p>
                <p>{averageTemp.toFixed(0)} &deg;C</p>
                <p>Windspeed: {windSpeed.toFixed(0)} kph</p>
            </div>
        </div>
    )
}

export default Card