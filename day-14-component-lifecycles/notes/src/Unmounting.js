// src/App.js
import React from 'react'

// /////////////////////////////////////////////
// Component Life Cycle
// React class methods

// Mounting
//	constructor()
// 	static getDerivedStateFromProps()
// 	render()
// 	componentDidMount()

// Updating
// 	static getDerivedStateFromProps()
// 	shouldComponentUpdate()
// 	render()
// 	getSnapshotBeforeUpdate()
// 	componentDidUpdate()

// Unmounting
//	componentWillUnmount()


// ////////
// Unmounting

// removes component from the DOM
// componentWillUnmount method is the only built-in method that gets called when a component is unmounted

class Unmounting extends React.Component {
	
	render() {
		return (
			<div className='Unmounting'>
			</div>
		)
	}
}


export default Unmounting