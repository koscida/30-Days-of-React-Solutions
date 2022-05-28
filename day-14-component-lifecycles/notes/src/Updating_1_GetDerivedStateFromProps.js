// src/App.js
import React from 'react'

// /////////////////////////////////////////////
// Updating_1_GetDerivedStateFromProps

// can be also called in the updating phase
// invoked right before calling the render method, both on the initial mount and on subsequent updates


class Updating_1_GetDerivedStateFromProps extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: 'John',
		}
		
		console.log('--I am constructor--')
		console.log(this.state)
	}
	
	
	componentDidMount() {
		console.log('--I am componentDidMount--')
		console.log(this.state)
		
		// after 3 seconds reset first name
		setTimeout(() => {
			console.log('--I am the timeout --')
			this.setState({
				firstName: 'Asabeneh',
			})
			console.log(this.state)
		}, 3000)
	}
	
	static getDerivedStateFromProps(props, state) {
		console.log('--I am getDerivedStateFromProps--')
		console.log(state)
		return { firstName: props.firstName }
	}
	
	render() {
		console.log('--I am render--')
		console.log(this.state)
		return (
			<div className='Updating_1_GetDerivedStateFromProps'>
				<h2>getDerivedStateFromProps</h2>
				<p>Author: {this.state.firstName}</p>
			</div>
		)
	}
}


export default Updating_1_GetDerivedStateFromProps