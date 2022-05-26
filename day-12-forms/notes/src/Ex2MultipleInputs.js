// src/Ex2MultipleInputs.js
import React, { Component } from 'react'

// Getting multiple input data from form

class Ex2MultipleInputs extends Component {
	// declaring initial state
	state = {
		firstName: '',
		lastName: '',
		country: '',
		title: '',
		students: [],
	}
	handleChange = (e) => {
		/*
		we can get the name and value like this: e.target.name, e.target.value
		but we can also destructure  name and value from e.target
		const name = e.target.name
		const value = e.target.value
		*/
		const { name, value } = e.target
		// [variablename] to use a variable name as a key in an object
		// name refers to the name attribute of the input elements
		this.setState({ [name]: value })
	}
	handleSubmit = (e) => {
		/* 
		e.preventDefault()
		stops the default behavior of form element
		specifically refreshing of page
		*/
		e.preventDefault()

		/*
		the is the place where we connect backend api 
		to send the data to the database
		*/

		console.log(this.state)
		
		// clears the inputs and adds to students list
		this.setState({ 
			firstName: '',
			lastName: '',
			country: '',
			title: '',
			students: [
				...this.state.students, {
					firstName: this.state.firstName,
					lastName: this.state.lastName,
					country: this.state.country,
					title: this.state.title
				}
			] 
		})
		
		console.log(this.state)
	}
	
	addedStudents = (s) => s.map( ({ firstName, lastName, country, title }, index) => (
		<div key={index}>
			Name: {firstName} {lastName}<br/>
			Country: {country}<br/>
			Title: {title}<br/>
		</div>
	))

	render() {
		// accessing the state value by destrutcturing the state
		const { 
			firstName, lastName, title, country,
			students
		} = this.state
		return (
			<div className='Ex2'>
				<h3>Add Student</h3>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
						type='text'
						name='firstName'
						placeholder='First Name'
						value={firstName}
						onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						value={lastName}
						onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
						type='text'
						name='country'
						placeholder='Country'
						value={country}
						onChange={this.handleChange}
						/>
					</div>
					<div>
						<input
						type='text'
						name='title'
						placeholder='Title'
						value={title}
						onChange={this.handleChange}
						/>
					</div>

					<button className='btn btn-success'>Submit</button>
					
					<div>{this.addedStudents(students)}</div>
				
				</form>
			</div>
		)
	}
}


export default Ex2MultipleInputs