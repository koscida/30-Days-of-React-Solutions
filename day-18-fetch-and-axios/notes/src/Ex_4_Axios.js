// src/App.js
import React from 'react'
import Country from './Country'
import axios from 'axios'

class Ex_4_Axios extends React.Component {
	state = {
		data: [],
	}
	
	componentDidMount() {
		const url = 'https://restcountries.com/v3.1/name/united'
			axios
			.get(url)
			.then((response) => {
				this.setState({
					data: response.data,
				})
			})
			.catch((error) => {
				console.log(error)
			})
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

export default Ex_4_Axios