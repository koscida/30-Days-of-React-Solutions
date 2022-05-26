// src/Ex1.js
import React, { Component } from 'react'

// Getting data from an input field

class Ex1InputField extends Component {
	// declaring state
	// initial state
	state = {
		firstName: '',
	}
	handleChange = (e) => {
		const value = e.target.value
		this.setState({ firstName: value })
	}

	render() {
		/*
		accessing the state value and 
		this value will injected to the input in the value attribute
		*/

		const firstName = this.state.firstName
		return (
		<div className='Ex1'>
			<label htmlFor='firstName'>First Name: </label>
			<input
			type='text'
			id='firstName'
			name='firstName'
			placeholder='First Name'
			value={firstName}
			onChange={this.handleChange}
			/>
			<h1>{this.state.firstName}</h1>
		</div>
		)
	}
}

export default Ex1InputField