import {useState} from 'react'

function Search({userInput}) { 
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

    const handleCityClick = async (lat, long) => { 
        console.log(lat, long)
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m`)
        const resData = await response.json()
        console.log(resData)
    } 

    // On city click, grab the lat-long and pass into the lat-long search

    return (
        <form>
            <input value={text} onChange={handleChange} />
            <button onClick={handleButtonClick}>Search</button>
            {
                userSearch.results ?    
                    userSearch.results.map((item) => {
                        return (
                            <div onClick={() => handleCityClick(item.latitude, item.longitude)} key={item.id}>
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