// src/App.js
import React from 'react'
import Ex1InputField from './Ex1InputField'
import Ex2MultipleInputs from './Ex2MultipleInputs'
import Ex3MultipleDataTypes from './Ex3MultipleDataTypes'
import Ex4Validation from './Ex4Validation'

// Notes

// Inputs
//
// initialize using state data
// get value through onChange event handler
//
// class App extends Component {
// 	state = {
// 		firstName: '',
// 	}
// 	handleChange = (e) => {
// 		const value = e.target.value
// 		this.setState({ firstName: value })
// 	}
// 	render() {
// 		const firstName = this.state.firstName
// 		return (
// 			<input type='text' id='firstName' name='firstName' placeholder='First Name' 
// 					value={firstName}
// 					onChange={this.handleChange}
// 			/>
// 		)
// 	}
// }
//
//

const App = () => (
	<>
		<h1>Example 1</h1>
		<Ex1InputField />
		
		<hr/>
		
		<h1>Example 2</h1>
		<Ex2MultipleInputs />
		
		<hr/>
		
		<h1>Example 3</h1>
		<Ex3MultipleDataTypes />
		
		<hr/>
		
		<h1>Example 4</h1>
		<Ex4Validation />
	</>
)

export default App