// src/App.js
import React from 'react'
import Country from './Country'
import axios from 'axios'

class Ex_5_Axios_Async extends React.Component {
	state = {
		data: [],
	}
	
	componentDidMount() {
		this.fetchCountryData()
	}
	
	fetchCountryData = async () => {
		const url = 'https://restcountries.com/v3.1/name/united'
		try {
			const response = await axios.get(url)
			const data = await response.data
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

export default Ex_5_Axios_Async