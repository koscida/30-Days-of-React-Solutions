// src/App.js
import React from 'react'


// /////////////////////////////////////////////
// Mounting_2_GetDerivedStateFromProps

// Place to set the state with prop values

// 	static getDerivedStateFromProps(props, state) {
// 		return { firstName: props.firstName }
// 	}

const User = ({ firstName }) => (
	<div>
		<p>Author: {firstName}</p>
	</div>
)

class Mounting_2_GetDerivedStateFromProps extends React.Component {
	constructor(props) {
		super(props)
		// we can write state inside or outside the constructor
		// if is written outside the constructor it does not need the keyword this
		this.state = {
			firstName: 'John',
		}
	}
	
	static getDerivedStateFromProps(props, state) {
		return { firstName: props.firstName }
	}

	render() {
		return (
			<div className='Mounting_2_GetDerivedStateFromProps'>
				<h2>getDerivedStateFromProps</h2>
				<p>Set the state with props here</p>
				<User firstName={this.state.firstName} />
			</div>
		)
	}
}


export default Mounting_2_GetDerivedStateFromProps