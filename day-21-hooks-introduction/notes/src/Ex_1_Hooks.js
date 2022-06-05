// src/App.js
import React, { useState } from 'react'


const Ex_1_Hooks = () => {
	// Declaring new state variable
	const [count, setCount] = useState(0)

	// separate function
	const addOne = () => {
		let value = count + 1
		setCount(value)
	}
	
	return (
		<div className='text-center my-lg-5 my-2'>
			<h1>{count} </h1>
			<button className='btn btn-primary m-1' onClick={addOne}>Add</button> 
			<button className='btn btn-primary m-1' onClick={() => setCount(count - 1)}>Subtract</button>
			<button className='btn btn-primary m-1' onClick={() => setCount(count * 2)}>Multiply</button>
			<button className='btn btn-primary m-1' onClick={() => setCount(count / 2)}>Divide</button>
		</div>
	)
}

export default Ex_1_Hooks