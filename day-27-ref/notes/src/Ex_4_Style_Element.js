// src/App.js
import React, { useRef } from 'react'

const Ex_4_Style_Element = (props) => {
	
	const ref = useRef(null)
	
	const onClick = () => {
		ref.current.style.backgroundColor = '#61dbfb'
		ref.current.style.padding = '50px'
		ref.current.style.textAlign = 'center'
	}
	
	return (
		<div className='App'>
			<p ref={ref}>How to style HTML from the DOM tree using useRef</p>
      		<button onClick={onClick}>Style it</button>
		</div>
	)
}

export default Ex_4_Style_Element