// src/App.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Country from './Country'

const App = (props) => {
	// setting initial state and method to update state
	const [data, setData] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const url = 'https://restcountries.com/v3.1/name/united'
		try {
			const response = await axios.get(url)
			const data = await response.data
			setData(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='App container'>
			<h1>Fetching Data Using Hook</h1>
			<h1>Calling API</h1>
			<div>
				<p>There are {data.length} countries in the api</p>
				<div className='countries-wrapper row'>
					{data.map((country) => (
						<Country country={country} key={country.cca2} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App