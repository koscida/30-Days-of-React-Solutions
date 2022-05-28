// src/App.js
import React from 'react'
import Mounting_1_Constructor from './Mounting_1_Constructor'
import Mounting_2_GetDerivedStateFromProps from './Mounting_2_GetDerivedStateFromProps'
import Mounting_3_Render from './Mounting_3_Render'
import Mounting_4_ComponentDidMount from './Mounting_4_ComponentDidMount'

// ///////////////////////////////////////////
// Mounting

// Order of execution
// 1. constructor
//		called first because it's a class component
// 2. getDerivedStateFromProps
//		this is the place to set the state object based on the initial props..why not in constructor??
// 3. render
// 4. componentDidMount


class Mounting extends React.Component {
	
	render() {
		return (
			<div className='Mounting'>
				<h1>React Component Life Cycle</h1>
				<div className='row'>
					<div className='col'>
						<Mounting_1_Constructor />
					</div>
					<div className='col'>
						<Mounting_2_GetDerivedStateFromProps firstName='koscida' />
					</div>
					<div className='col'>
						<Mounting_3_Render firstName='koscida' />
					</div>
					<div className='col'>
						<Mounting_4_ComponentDidMount />
					</div>
				</div>
			</div>
		)
	}
}


export default Mounting