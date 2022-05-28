// src/App.js
import React from 'react'
import Updating_1_GetDerivedStateFromProps from './Updating_1_GetDerivedStateFromProps'
import Updating_2_ShouldComponentUpdate from './Updating_2_ShouldComponentUpdate'
import Updating_3_Render from './Updating_3_Render'
import Updating_4_GetSnapshotBeforeUpdate from './Updating_4_GetSnapshotBeforeUpdate'
import Updating_5_ComponentDidUpdate from './Updating_5_ComponentDidUpdate'

// /////////////////////////////////////////////
// Updating

// Order of execution
// 1. static getDerivedStateFromProps()
// 2. shouldComponentUpdate()
// 3. render()
// 4. getSnapshotBeforeUpdate()
// 5. componentDidUpdate()


class Updating extends React.Component {
	
	render() {
		return (
			<div className='Updating'>
				<div className='row'>
					<div className='col'>
						<Updating_1_GetDerivedStateFromProps  firstName='koscida' />
					</div>
					<div className='col'>
						<Updating_2_ShouldComponentUpdate firstName='koscida' />
					</div>
					<div className='col'>
						<Updating_3_Render />
					</div>
					<div className='col'>
						<Updating_4_GetSnapshotBeforeUpdate />
					</div>
					<div className='col'>
						<Updating_5_ComponentDidUpdate />
					</div>
				</div>
			</div>
		)
	}
}


export default Updating