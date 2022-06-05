// src/App.js
import React, { useState } from 'react'


const Ex_1_SingleInput = (props) => {
	// initial state and method to update state
	const [firstName, setFirstName] = useState('')
	const handleChange = (e) => {
		const value = e.target.value
		setFirstName(value)
	}
	return (
		<div className='ex1'>
			<label htmlFor='firstName'>First Name: </label>
			<input
				type='text'
				id='firstName'
				name='firstName'
				placeholder='First Name'
				value={firstName}
				onChange={handleChange}
			/>
			<h1>{firstName}</h1>
		</div>
	)
}

export default Ex_1_SingleInput