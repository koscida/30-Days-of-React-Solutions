// src/App.js
import React from 'react'
import Ex_1_SingleInput from './Ex_1_SingleInput'
import Ex_2_MultipleInputs from './Ex_2_MultipleInputs'
import Ex_3_MultipleInputsTypes from './Ex_3_MultipleInputsTypes'
import Ex_4_Validation from './Ex_4_Validation'

class App extends React.Component {
	
	render() {
		
		return (
			<div className='App container'>
				
				<div className='row'>
					
					<div className='col-6'>
						<h1>Ex 1: Single Input</h1>
						<Ex_1_SingleInput />
					</div>
					
					<div className='col-6'>
						<h1>Ex 2: Multiple Inputs</h1>
						<Ex_2_MultipleInputs />
					</div>
					
				</div>
				
				
				<div className='row'>
					
					<div className="col-6">
						<h1>Ex 3: Multiple Input Types</h1>
						<Ex_3_MultipleInputsTypes />
					</div>
					
					<div className='col-6'>
						<h1>Ex 4: Validation</h1>
						<Ex_4_Validation />
					</div>
					
				</div>
				
			</div>
		)
	}
}

export default App