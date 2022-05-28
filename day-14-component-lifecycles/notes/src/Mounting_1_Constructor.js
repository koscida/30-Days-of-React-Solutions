// src/App.js
import React from 'react'

// /////////////////////////////////////////////
// Mounting_1_Constructor


class Mounting_1_Constructor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
		}
	}
	render() {
		return (
			<div className='Mounting_1_Constructor'>
				<h2>constructor</h2>
				<p>The constructor is the first to Run</p>
				<p>Author:{this.state.firstName}</p>
			</div>
		)
	}
}

export default Mounting_1_Constructor