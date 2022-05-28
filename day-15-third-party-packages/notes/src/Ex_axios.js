// Ex_axios.js
import React from 'react'
import axios from 'axios'

// npm install axios

class Ex_axios extends React.Component {
	state = {
		data: [],
	}
	componentDidMount() {
		const API_URL = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5'
		axios
		.get(API_URL)
		.then((response) => {
			this.setState({
				data: response.data,
			})
		})
		.catch((error) => {
			console.log(error)
		})
	}

	renderCatFact = () => this.state.data.map( (fact) => 
		<div key={fact['_id']}>
				<h4>~{fact['type']} fact~</h4>
				<p>{fact['text']}</p>
				<small>Submitted: {fact['createdAt']}</small>
		</div>
	)
	
	render() {
		return (
		<div className='App'>
			<h1>Fetching Data Using Axios</h1>
			<div>
			<p>There are {this.state.data.length} countries in the api</p>
			<div className='countries-wrapper'>{this.renderCatFact()}</div>
			</div>
		</div>
		)
	}
}

export default Ex_axios