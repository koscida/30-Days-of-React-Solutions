// src/App.js
import React, { useRef } from 'react'

const Ex_1_Input = (props) => {
	
	const ref = useRef(null)
	
	const onClick = () => {
		ref.current.focus()
	}
	
	return (
		<div className='App'>
			<p>How to focus on input element useRef</p>
			<input type='text' ref={ref} />
			<br />
			<button onClick={onClick}>Click to Focus on input</button>
		</div>
	)
}

export default Ex_1_Input