// src/App.js
import React from 'react'
import Mounting from './Mounting'
import Updating from './Updating'
import Unmounting from './Unmounting'

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


class AppEx extends React.Component {
	// initalizes
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	// This the right place to set the state object based on the initial props.
	static getDerivedStateFromProps(props, state) {}
	
	// This a place place to setting time interval and call APIs
	componentDidMount() {}
	
	// called when state is updated
	render() {
		return (<></>)
	}
	
}


class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<Mounting />
				<Updating />
				<Unmounting />
			</div>
		)
	}
}


export default App