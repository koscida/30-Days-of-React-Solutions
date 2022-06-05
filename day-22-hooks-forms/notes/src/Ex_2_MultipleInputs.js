// src/App.js
import React, { useState } from 'react'


const Ex_2_MultipleInputs = (props) => {
	const initialState = {
		firstName: '',
		lastName: '',
		country: '',
		title: '',
	}
	const [formData, setData] = useState(initialState)

	const onChange = (e) => {
		const { name, value } = e.target
		setData({ ...formData, [name]: value })
	}
	const onSubmit = (e) => {
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
		console.log(formData)
	}

	// accessing the state value by destrutcturing the state
	const { firstName, lastName, title, country } = formData
	return (
		<div className='ex2'>
		<h3>Add Student</h3>
		<form onSubmit={onSubmit}>
			<div>
			<input
				type='text'
				name='firstName'
				placeholder='First Name'
				value={firstName}
				onChange={onChange}
			/>
			</div>
			<div>
			<input
				type='text'
				name='lastName'
				placeholder='Last Name'
				value={lastName}
				onChange={onChange}
			/>
			</div>
			<div>
			<input
				type='text'
				name='country'
				placeholder='Country'
				value={country}
				onChange={onChange}
			/>
			</div>
			<div>
			<input
				type='text'
				name='title'
				placeholder='Title'
				value={title}
				onChange={onChange}
			/>
			</div>

			<button className='btn btn-success'>Submit</button>
		</form>
		</div>
	)
}

export default Ex_2_MultipleInputs