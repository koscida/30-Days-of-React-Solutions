// src/App.js
import React from 'react'
import Country from './Country'

class Ex_1_Fetch extends React.Component {
	state = {
		data: [],
	}
	
	componentDidMount() {
		//const url = 'https://restcountries.com/v3.1/all'
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
		
		fetch(url, options)
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

export default Ex_1_Fetch