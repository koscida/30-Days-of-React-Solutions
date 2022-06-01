// src/App.js
import React from 'react'


const Country = ({
	country: { name: { common }, capital, flags : {png}, languages, currencies, population, capitalInfo },
}) => {
	console.log(common)
	const formatedCapital =
		Object.keys(capitalInfo).length === 0 ? '' : (
			<p>
				<span>Capital: </span>
				{capital}
			</p>
		)
	const formatedLanguage = 
		languages === undefined ? '' : (
			<p>
				<span>{languages.length > 1 ? `Languages` : `Language`}: </span>
				{Object.values(languages).join(', ')}
			</p>
		)
	const formatedPopulation = (
			<p>
				<span>Population: </span>
				{population.toLocaleString()}
			</p>
		)
	const formatedCurrency = 
		currencies === undefined ? '' : (
			<p>
				<span>{(Object.keys(currencies).length > 1) ? `Currencies` : `Currency`}: </span>
				{Object.keys(currencies).join(', ')}
			</p>
		)
	return (
		<div className='col-md-6 col-lg-3 mb-4'>
			<div className='country card'>
				<div className='card-img-top country-image'>
					<img src={png} alt={common} />
				</div>
				<div className='card-body'>
					<h5 class="card-title">{common.toUpperCase()}</h5>
					<div className='card-text country_text'>
						{formatedCapital}
						{formatedLanguage}
						{formatedPopulation}
						{formatedCurrency}
					</div>
				</div>
			</div>
		</div>
	)
}

class App extends React.Component {
	state = {
		data: [],
	}
	
	componentDidMount() {
		//this.fetchCountryData()
		//const url = 'https://restcountries.com/v3.1/all'
		const url = 'https://restcountries.com/v3.1/name/united'
		
		fetch(url, {
			method : "GET",
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
		})
		.then((response) => {
			if (!response.ok) {
				throw new Error(response.error)
			}
			return response.json()
		})
		.then((data) => {
			console.log(data)
			this.setState({
				data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
	}
	
	// fetchCountryData = async () => {
	// 	const url = 'https://restcountries.com/v3.1/all'
	// 	try {
	// 		const response = await fetch(url)
	// 		const data = await response.json()
	// 		this.setState({
	// 			data,
	// 		})
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
  
	render() {
		return (
			<div className='App container'>
				<h1>Countries</h1> 
				<p>There are {this.state.data.length} countries in the api</p>
				<div className='countries-wrapper row'>
					{this.state.data.map((country) => (
						<Country country={country} key={country.cca2}/>
					))}
				</div>
			</div>
		)
	}
}

export default App