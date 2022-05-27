// src/App.js
import React from 'react'

// Uncotrolled Components

// example with single input

// class App extends React.Component {
// 	firstName = React.createRef()
// 	handleSubmit = (e) => {
// 		e.preventDefault()
// 		console.log(this.firstName.current.value)
// 	}
// 	render() {
// 		return (
// 		<div className='App'>
// 			<form onSubmit={this.handleSubmit}>
// 			<label htmlFor='firstName'>First Name: </label>
// 			<input
// 				type='text'
// 				id='firstName'
// 				name='firstName'
// 				placeholder='First Name'
// 				ref={this.firstName}
// 			/>
// 			<button type='submit'>Submit</button>
// 			</form>
// 		</div>
// 		)
// 	}
// }


// example with multiple inputs

class App extends React.Component {
	// creates a ref to the dom object
	firstName = React.createRef()
	lastName = React.createRef()
	country = React.createRef()
	title = React.createRef()

	handleSubmit = (e) => {
		// stops the default behavior of form element specifically refreshing of page
		e.preventDefault()

		console.log(this.firstName.current) // the entire <input />
		console.log(this.firstName.current.value) // only the value of the input
		console.log(this.lastName.current.value)
		console.log(this.title.current.value)
		console.log(this.country.current.value)
		

		// build new object for db
		const data = {
			firstName: this.firstName.current.value,
			lastName: this.lastName.current.value,
			title: this.title.current.value,
			country: this.country.current.value,
		}
		// the is the place we connect backend api to send the data to the database
		console.log(data)
		
		
		// manually process the objects like regular javascript
		
		// clear input after submission
		this.firstName.current.value = null;
		this.lastName.current.value = null;
		this.title.current.value = null;
		this.country.current.value = null;
	}

	render() {
		return (
		<div className='App container'>
			<h3>Add Student</h3>
			<form onSubmit={this.handleSubmit}>
				<div className="mb-3">
					<label htmlFor='firstName' className="form-label">First Name</label>
					<input
						id='firstName'
						type='text'
						className="form-control"
						name='firstName'
						placeholder='First Name'
						ref={this.firstName}
						onChange={this.handleChange}
						/>
				</div>
				<div className="mb-3">
					<label htmlFor='lastName' className="form-label">Last Name</label>
					<input
						id='lastName'
						type='text'
						className="form-control"
						name='lastName'
						placeholder='Last Name'
						ref={this.lastName}
						onChange={this.handleChange}
						/>
				</div>
				<div className="mb-3">
					<label htmlFor='country' className="form-label">Country</label>
					<input
						id='country'
						type='text'
						className="form-control"
						name='country'
						placeholder='Country'
						ref={this.country}
						onChange={this.handleChange}
						/>
				</div>
				<div className="mb-3">
					<label htmlFor='title' className="form-label">Title</label>
					<input
						id='title'
						type='text'
						className="form-control"
						name='title'
						placeholder='Title'
						ref={this.title}
						onChange={this.handleChange}
						/>
				</div>

				<div className="mb-3">
					<button className='btn btn-success'>Submit</button>
				</div>
			
			</form>
		</div>
		)
	}
}

export default App