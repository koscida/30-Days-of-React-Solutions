// src/App.js
import React from 'react'
import axios from 'axios'

class Exercise2 extends React.Component {
	state = {
		data: [],
		avgWeightImperial: 0,
		avgWeightMetric: 0,
		avgYears: 0,
	}
	
	componentDidMount() {
		this.fetchCountryData()
	}
	
	fetchCountryData = async () => {
		const url = 'https://api.thecatapi.com/v1/breeds'
		try {
			const response = await axios.get(url)
			const data = await response.data
			
			const avgWeightImperial = (data.map( cat => {
				const range = cat.weight.imperial.replace(/\s/g, '').split('-')
				return Number(range[0]) + Number(range[1]) / 2
			}).reduce((i,x) => x+i) / data.length).toFixed(1)
			
			const avgWeightMetric = (data.map( cat => {
				const range = cat.weight.metric.replace(/\s/g, '').split('-')
				return Number(range[0]) + Number(range[1]) / 2
			}).reduce((i,x) => x+i) / data.length).toFixed(1)
			
			const avgYears = (data.map( cat => {
				const range = cat.life_span.replace(/\s/g, '').split('-')
				return Number(range[0]) + Number(range[1]) / 2
			}).reduce((i,x) => x+i) / data.length).toFixed(1)
			
			this.setState({
				data, avgWeightImperial, avgWeightMetric, avgYears
			})
		} catch (error) {
			console.log(error)
		}
	}
	
	render() {
		return (
			<div className=''>
				<h2>Exercise 2</h2>
				<p>There are {this.state.data.length} cat breeds</p>
				<p>The average cat can weight about <span>{this.state.avgWeightMetric}</span> kg ({this.state.avgWeightImperial} lb) and live <span>{this.state.avgYears} years</span></p>
			</div>
		)
	}
}

export default Exercise2