// src/App.js
import React, { useState } from 'react'

const Count = ({ count, addOne, subtractOne, multipleTwo, divideTwo }) => (
	<div>
		<h1>{count} </h1>
		<button className='btn btn-primary m-1' onClick={addOne}>Add</button> 
		<button className='btn btn-primary m-1' onClick={subtractOne}>Subtract</button>
		<button className='btn btn-primary m-1' onClick={multipleTwo}>Multiply</button>
		<button className='btn btn-primary m-1' onClick={divideTwo}>Divide</button>
	</div>
)

const Ex_2_Multiple_Components = () => {
	// Declaring new state variable
	const [count, setCount] = useState(0)

	// separate function
	const addOne = () => { setCount(count + 1) }
	const subtractOne = () => { setCount(count - 1) }
	const multipleTwo = () => { setCount(count * 2) }
	const divideTwo = () => { setCount(count / 2) }
	
	return (
		<div className='text-center my-lg-5 my-2'>
			<Count 
				count={count} 
				addOne={addOne} 
				subtractOne={subtractOne} 
				multipleTwo={multipleTwo} 
				divideTwo={divideTwo} 
				/>
		</div>
	)
}

export default Ex_2_Multiple_Components