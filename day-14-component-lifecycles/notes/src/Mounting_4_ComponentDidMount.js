// src/App.js
import React from 'react'
import ReactDOM from 'react-dom'


// /////////////////////////////////////////////
// Mounting_4_ComponentDidMount

// called after render()
// This a place place to setting time interval and call APIs

class Mounting_4_ComponentDidMount extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: 'John',
			counter: 0,
			data: []
		}
	}
	
	componentDidMount() {
		// after 3 seconds reset first name
		setTimeout(() => {
			this.setState({
				firstName: 'Asabeneh',
			})
		}, 3000)
		
		// every second resets the counter
		setInterval(() => {
			this.setState((prev,props) => ({
				counter: prev.counter + 1,
			}))
		}, 1000)
		
		// fetch data from an api
		const API_URL = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5'
		fetch(API_URL)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				//console.log(data)
				this.setState({
					data,
				})
			})
			.catch((error) => {
				console.log(error)
			})
	}
	
	renderCatFact = () => this.state.data.map( (fact) => 
		<div key={fact['_id']}>
			<div>
				<p>Fact about a {fact['type']}</p>
				<p>Fact: {fact['text']}</p>
				<small>Submitted on: {fact['createdAt']}</small>
			</div>
		</div>
	)

	render() {
		return (
			<div className='App'>
				<h2>componentDidMount Method</h2>
				<p>Called after render(), can set callbacks to update</p>
				<p>Author: {this.state.firstName}</p>
				<p>Counter: {this.state.counter}</p>
				
				<h3>Calling API</h3>
				<div>
					<p>There are {this.state.data.length} facts in the api</p>
					<div className='countries-wrapper'>{this.renderCatFact()}</div>
				</div>
			</div>
		)
	}
}


export default Mounting_4_ComponentDidMount