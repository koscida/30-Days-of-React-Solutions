// src/App.js
import React from 'react'


// /////////////////////////////////////////////
// Mounting_3_Render

// renders whenever there is change in state
// Do not set state inside the render method, create a method to reset the state


const User = ({ firstName }) => (
	<div>
		<p>Author: {firstName}</p>
	</div>
)

class Mounting_3_Render extends React.Component {
	state = {
		firstName: 'John',
		counter: 0,
	}
	
	static getDerivedStateFromProps(props, state) {
		return { firstName: props.firstName }
	}
	
	handleClick = (e) => {
		this.setState((prevState, props) => ({ counter: prevState.counter + 1 }))
	}
	
	render() {
		return (
			<div className='Mounting_3_Render'>
				<h2>render</h2>
				<p>renders when state is updated</p>
				<User firstName={this.state.firstName} />
				<p>Counter: {this.state.counter}</p>
				<button onClick={this.handleClick} className='btn btn-primary'>Click</button>
			</div>
		)
	}
}


export default Mounting_3_Render