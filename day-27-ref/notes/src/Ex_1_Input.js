// src/App.js
import React, { useRef } from 'react'

const Ex_1_Input = (props) => {
	const ref = useRef(null)
	
	const onClick = () => {
		let value = ref.current.value
		alert(value)
		ref.current.focus()
	}
	
	return (
		<div className='App'>
			<p>How to use data from uncontrolled input using useRef</p>
			<input type='text' ref={ref} />
			<br />
			<button onClick={onClick}>Get Input Data</button>
		</div>
	)
}

export default Ex_1_Input