import {useState} from 'react'

function Search({userInput}) { 
    const [isLoading, setIsLoding] = useState(true)
    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = (event) => {
        if (!text) {
            // show an alert or similar
        } else {
            event.preventDefault()
            userInput(text)
            setText('')
        }
    }

    return (
        <form>
            <input value={text} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </form>
    )
}

export default Search