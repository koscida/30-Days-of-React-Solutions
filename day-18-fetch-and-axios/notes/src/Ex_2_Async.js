// src/App.js
import React from 'react'
import Country from './Country'

class Ex_2_Async extends React.Component {
	state = {
		data: [],
	}
	
	componentDidMount() {
		this.fetchCountryData()
	}
	
	fetchCountryData = async () => {
		const url = 'https://restcountries.com/v3.1/name/united'
		const options = {
			method : "GET",
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
		}
		try {
			const response = await fetch(url, options)
			const data = await response.json()
			this.setState({
				data,
			})
		} catch (error) {
			console.log(error)
		}
	}
  
	render() {
		return (
			<div className=''>
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

export default Ex_2_Async