import { useState } from 'react'
import Search from './components/Search'
import './App.css'

function App() {
	const [searchTerm, setSearchTerm] = useState('')

	const userHasSearched = (input) => {
		setSearchTerm(input)
	}

	return (
		<>
			<h1>Hello there.</h1>
			<Search userInput={userHasSearched} />
			{
				searchTerm ? <p>{searchTerm}</p> : null
			}
		</>
	)
}

export default App
