// src/App.js
import React from 'react'


// Exercises: Level 1

// What is the importance of form?
//		submit data
// How many input types do you know?
//		input type=
//			text, number, range
//			radio, checkbox, color
//			password, hidden
//			tel, email
//			url, file, image
//			date, time, datetime-local, month, week
//			button, submit, reset, search
//		textarea
//		select
//			option
//		button
//		form
// Mention at least four attributes of an input element
//		id, name, type, value, placeholder, event handlers, data, etc
// What is the importance of htmlFor?
//		used in labels, jsx version of for
// Write an input type which is not given in the example if there is?
//		?
// What is a controlled input?
//		controlled with state
// What do you need to write a controlled input?
//		we need the state, so a class
// What event type do you use to listen changes on an input field?
//		onChange, onBlur
// What is the value of a checked checkbox?
//		checked=checked
// When do you use onChange, onBlur, onSubmit?
//		can be used during validation checks
// What is the purpose of writing e.preventDefault() inside the submit handler method?
//		stops submit or other default behavior
// How do you bind data in React? The first input field example is data binding in React.
//		bind to state
// What is validation?
//		checking inputs before submission
// What is the event type you use to listen when an input changes?
//		onChange
// What are event types do you use to validate an input?
//		onBlur

	
// Exercises: Level 2
// Validate the form given above (a gif image or a video will be provided later). First try to validate without using any library then try it with validator.js.

const options = [
	{
		value: '',
		label: '-- Select Country--',
	},
	{
		value: 'Finland',
		label: 'Finland',
	},
	{
		value: 'Sweden',
		label: 'Sweden',
	},
	{
		value: 'Norway',
		label: 'Norway',
	},
	{
		value: 'Denmark',
		label: 'Denmark',
	},
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
	<option value={value}> {label}</option>
))

class App extends React.Component {
	// declaring state
	state = {
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		tel: '',
		dateOfBirth: '',
		favoriteColor: '',
		weight: '',
		gender: '',
		file: '',
		bio: '',
		skills: {
			html: false,
			css: false,
			javascript: false,
		},
		touched: {
			firstName: false,
			lastName: false,
		},
	}
	handleChange = (e) => {
		/*
		we can get the name and value like: e.target.name, e.target.value
		Wwe can also destructure name and value from e.target
		const name = e.target.name
		const value = e.target.value
		*/
		const { name, value, type, checked } = e.target
		/*
		[variablename] we can make a value stored in a certain variable could be a key for an object, in this case a key for the state
		*/

		if (type === 'checkbox') {
		this.setState({
			skills: { ...this.state.skills, [name]: checked },
		})
		} else if (type === 'file') {
			this.setState({ [name]: e.target.files[0] })
		} else {
			this.setState({ [name]: value })
		}
	}
	handleBlur = (e) => {
		const { name, value } = e.target
		this.setState({ touched: { ...this.state.touched, [name]: true } })
	}
	validate = () => {
		// Object to collect error feedback and to display on the form
		const errors = {
			firstNameError: '',
			lastNameError: '',
			emailError: '',
			phoneError: '',
		}

		// run validation
		
		// firstName
		if (
			(this.state.touched.firstName && this.state.firstName.length < 3) ||
			(this.state.touched.firstName && this.state.firstName.length > 12)
		) {
			errors.firstNameError = 'First name must be between 2 and 12'
		}
		// lastName
		if (
			(this.state.touched.lastName && this.state.lastName.length < 3) ||
			(this.state.touched.lastName && this.state.lastName.length > 20)
		) {
			errors.lastNameError = 'Last name must be between 2 and 20'
		}
		// phone
		// regex source: https://www.w3resource.com/javascript/form/phone-no-validation.php
		var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (this.state.touched.tel && !this.state.tel.match(phoneRegex)) {
			errors.phoneError = 'Must be valid phone number'
		}
		// email
		// regex source: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
		var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (this.state.touched.email && !this.state.email.match(emailRegex)) {
			errors.emailError = 'Must be valid email'
		}
		
		return errors
	}
	handleSubmit = (e) => {
		/*
		e.preventDefault()
		stops the default behavior of form element 
		specifically refreshing of page
		*/
		e.preventDefault()

		const {
			firstName,
			lastName,
			email,
			country,
			gender,
			tel,
			dateOfBirth,
			favoriteColor,
			weight,
			bio,
			file,
			skills,
		} = this.state

		const formattedSkills = []
		for (const key in skills) {
				console.log(key)
			if (skills[key]) {
				formattedSkills.push(key.toUpperCase())
			}
		}
		const data = {
			firstName,
			lastName,
			email,
			country,
			gender,
			tel,
			dateOfBirth,
			favoriteColor,
			weight,
			bio,
			file,
			skills: formattedSkills,
		}
		/*
		the is the place where we connect backend api
		to send the data to the database
		*/
		console.log(data)
	}

	render() {
		
		// accessing the state value by destrutcturing the state
		const { 
			firstName,
			lastName,
			email,
			country,
			gender,
			tel,
			dateOfBirth,
			favoriteColor,
			weight,
			bio,
			file,
			skills
		} = this.state
		
		
		// the noValidate attribute on the form is to stop the HTML5 built-in validation
		
		// call validate (runs validation) and desctucturing the returned error messages
		const { firstNameError, lastNameError, emailError, phoneError } = this.validate()
		
		return (
			<div className='App'>
				<h3>Add Student</h3>
				<form onSubmit={this.handleSubmit} noValidate>
					<div className='row'>
						<div className='form-group'>
						<label htmlFor='firstName'>First Name </label>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
							placeholder='First Name'
						/> <br />
						<small>{firstNameError}</small>
						</div>
						<div className='form-group'>
						<label htmlFor='lastName'>Last Name </label>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
							placeholder='Last Name'
						/>
						<br />
						<small>{lastNameError}</small>
						</div>
						<div className='form-group'>
						<label htmlFor='email'>Email </label>
						<input
							type='email'
							name='email'
							value={email}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
							placeholder='Email'
						/> <br />
						<small>{emailError}</small>
						</div>
					</div>

					<div className='form-group'>
						<label htmlFor='tel'>Telephone </label>
						<input
						type='tel'
						name='tel'
						value={tel}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
						placeholder='Tel'
						/> <br />
						<small>{phoneError}</small>
					</div>

					<div className='form-group'>
						<label htmlFor='dateOfBirth'>Date of birth </label>
						<input
						type='date'
						name='dateOfBirth'
						value={dateOfBirth}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
						placeholder='Date of Birth'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='favoriteColor'>Favorite Color</label>
						<input
						type='color'
						id='favoriteColor'
						name='favoriteColor'
						value={favoriteColor}
						onChange={this.handleChange}
						placeholder='Favorite Color'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='weight'>Weight </label>
						<input
						type='number'
						id='weight'
						name='weight'
						value={weight}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
						placeholder='Weight in Kg'
						/>
					</div>
					<div>
						<label htmlFor='country'>Country</label> <br />
						<select 
							name='country' 
							onChange={this.handleChange} 
							id='country'>
						{selectOptions}
						</select>
					</div>

					<div>
						<p>Gender</p>
						<div>
						<input
							type='radio'
							id='female'
							name='gender'
							value='Female'
							onChange={this.handleChange}
							checked={gender === 'Female'}
						/>
						<label htmlFor='female'>Female</label>
						</div>
						<div>
						<input
							id='male'
							type='radio'
							name='gender'
							value='Male'
							onChange={this.handleChange}
							checked={gender === 'Male'}
						/>
						<label htmlFor='male'>Male</label>
						</div>
						<div>
						<input
							id='nonbinary'
							type='radio'
							name='gender'
							value='NonBinary'
							onChange={this.handleChange}
							checked={gender === 'NonBinary'}
						/>
						<label htmlFor='other'>Other</label>
						</div>
					</div>

					<div>
						<p>Select your skills</p>
						<div>
						<input
							type='checkbox'
							id='html'
							name='html'
							onChange={this.handleChange}
						/>
						<label htmlFor='html'>HTML</label>
						</div>
						<div>
						<input
							type='checkbox'
							id='css'
							name='css'
							onChange={this.handleChange}
						/>
						<label htmlFor='css'>CSS</label>
						</div>
						<div>
						<input
							type='checkbox'
							id='javascript'
							name='javascript'
							onChange={this.handleChange}
						/>
						<label htmlFor='javascript'>JavaScript</label>
						</div>
					</div>
					<div>
						<label htmlFor='bio'>Bio</label> <br />
						<textarea
						id='bio'
						name='bio'
						value={this.state.bio}
						onChange={this.handleChange}
						cols='120'
						rows='10'
						placeholder='Write about yourself ...'
						/>
					</div>

					<div>
						<input type='file' name='file' onChange={this.handleChange} />
					</div>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default App