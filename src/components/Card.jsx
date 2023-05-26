function Card({date, maxTemp, minTemp, windSpeed, current}) {
    console.log({current})

    return (
        <div className="card">
            <h2>{date}</h2>
            <h2>Icon to go here</h2>
            <h2>Description: {current.weathercode}</h2>
            <h2>Temperature: {maxTemp}</h2>
            <h2>Windspeed: {windSpeed}</h2>
        </div>
    )
}

export default Card