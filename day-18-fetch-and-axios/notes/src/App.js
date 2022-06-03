// src/App.js
import React from 'react'
import Ex_1_Fetch from './Ex_1_Fetch'
import Ex_2_Async from './Ex_2_Async'
import Ex_3_Input from './Ex_3_Input'
import Ex_4_Axios from './Ex_4_Axios'
import Ex_5_Axios_Async from './Ex_5_Axios_Async'

class App extends React.Component {
	render() {
		return (
			<div className='App container'>
				<h1>Fetch and Axios</h1>
				
				<h2>Fetch</h2>
				<Ex_1_Fetch />
				
				<h2>Async</h2>
				<Ex_2_Async />
				
				<h2>Input</h2>
				<Ex_3_Input />
				
				<h2>Axios</h2>
				<Ex_4_Axios />
				
				<h2>Axios Async</h2>
				<Ex_5_Axios_Async />
			</div>
		)
	}
}

export default App