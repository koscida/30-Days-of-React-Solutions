// src/App.js
import React from 'react'
import axios from 'axios'

class Exercise3 extends React.Component {
	state = {
		data: [],
		countries: [],
		countriesInOrder: 0,
	}
	
	componentDidMount() {
		this.fetchCountryData()
	}
	
	fetchCountryData = async () => {
		const url = 'https://api.thecatapi.com/v1/breeds'
		try {
			const response = await axios.get(url)
			const data = await response.data
			
			const countries = data.reduce((countries,cat) => {
				const origin = cat.origin
				if(origin in countries)
					countries[origin].push(cat)
				else
					countries[origin] = [cat]
					
				//countries[origin] = [...countries[origin], cat]
				return countries
			}, {})
			
			const countriesInOrder = countries.length
			
			this.setState({
				data, countries, countriesInOrder
			})
		} catch (error) {
			console.log(error)
		}
	}
	
	displayCountriesWithBreeds = () => {
		return <p>
				{Object.values(this.state.countries).length} countries have cat breeds:&nbsp;
				{Object.keys(this.state.countries).join(", ")}
			</p>
	}
	
	displayCountryWithMostBreeds = () => {
		const countryWithMostBreedsArray = Object.values(this.state.countries).reduce( (r, c) => (r.length < c.length) ? c : r, [])
		console.log(countryWithMostBreedsArray)
		const origin = countryWithMostBreedsArray.length > 0 ? countryWithMostBreedsArray[0].origin : ''
		const totalBreeds = countryWithMostBreedsArray.length
		const breeds = countryWithMostBreedsArray.length > 0 ? countryWithMostBreedsArray.map(c => c.name ).join(", ") : ''
		return <p>The {origin} has the most number of breeds at {totalBreeds} total breeds: {breeds}</p>
		// return 0
	}
	
	displayCountriesInOrder = () => {
		const countriesOrdered = Object.values(this.state.countries).sort( (a,b) => a.length - b.length)
		const countryList = countriesOrdered.length > 0 ? countriesOrdered.map(arr => (
			<li key={arr[0].country_code}>
				{arr[0].origin} - {arr.length} cat breeds
				<ul>
					{arr.map(cat => <li key={cat.id}>{cat.name}</li>)}
				</ul>
			</li>
		)) : ''
		return <p>{countryList}</p>
	}
	
	render() {
		return (
			<div className=''>
				<h2>Exercise 3</h2>
				
				<p>There are {this.state.data.length} cat breeds</p>
				
				<p>How many countries do have cat breeds?</p>
				{this.displayCountriesWithBreeds()}
				
				<p>Which country has the highest number of cat breeds?</p>
				{this.displayCountryWithMostBreeds()}
				
				<p>Arrange countries in ascending order based on the number of cat breeds they have?</p>
				{this.displayCountriesInOrder()}
			</div>
		)
	}
}

export default Exercise3