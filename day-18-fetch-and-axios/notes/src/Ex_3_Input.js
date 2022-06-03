// src/App.js
import React from 'react'
import Country from './Country'

class Ex_3_Input extends React.Component {
	state = {
		searchTerm: '',
		data: [],
	}
	
	fetchCountryData = async () => {
		const url = 'https://restcountries.com/v3.1/name/' + this.state.searchTerm
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
	
	handleChange = (e) => {
		const value = e.target.value
		this.setState({ searchTerm: value })
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.searchTerm) {
			this.fetchCountryData()
		}
	}
  
	render() {
		return (
			<div className=''>
				<form className='row' onSubmit={this.handleSubmit}>
					<div class="col-6">
						<div className="form-group mb-2">
							<label className='form-label' htmlFor='search'>Search: </label>
							<input type="text" onChange={this.handleChange} className="form-control" id="search" />
						</div>
						<div className="form-group mb-2">
							<button type="submit" className='btn btn-primary'>Go!</button>
						</div>
					</div>
				</form>
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

export default Ex_3_Input