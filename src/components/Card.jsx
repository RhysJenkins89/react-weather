import wmoCodes from '../data/wmo-weather-codes'
import days from '../data/days'

function Card({date, maxTemp, minTemp, windSpeed, current}) {
    const averageTemp = (maxTemp + minTemp) / 2
    
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    const dateText = new Intl.DateTimeFormat('en-GB', dateOptions).format(new Date(date));

    return (
        <div className="card">
            <h2>{dateText}</h2>
            <h2>Icon to go here</h2>
            <h2>Description: {wmoCodes.hasOwnProperty(current.weathercode) ? wmoCodes[current.weathercode] : null}</h2>
            <h2>Average temperature: {averageTemp.toFixed(0)}</h2>
            <h2>Windspeed: {windSpeed}</h2>
        </div>
    )
}

export default Card