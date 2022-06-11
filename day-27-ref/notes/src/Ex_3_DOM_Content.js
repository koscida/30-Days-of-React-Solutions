// src/App.js
import React, { useRef } from 'react'

const Ex_3_DOM_Content = (props) => {
	
	const ref = useRef(null)
	
	const onClick = () => {
		let content = ref.current.textContent
		alert(content)
		console.log(content)
	}
	
	return (
		<div className='App'>
			<p ref={ref}>How to getting content from the DOM tree</p>
			<button onClick={onClick}>Getting Content</button>
		</div>
	)
}

export default Ex_3_DOM_Content