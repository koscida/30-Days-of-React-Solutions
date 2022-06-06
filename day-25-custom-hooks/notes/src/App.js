// src/App.js
import React from 'react'
import useFetch from './useFetch'
import Country from './Country'

const App = (props) => {
	const url = 'https://restcountries.com/v3.1/name/united'
	
	// setting data with custom useFetch hook
	//		hook uses useEffect() to update after api call
	const data = useFetch(url)

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