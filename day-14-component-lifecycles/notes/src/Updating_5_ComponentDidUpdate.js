// src/App.js
import React from 'react'

// /////////////////////////////////////////////
// Updating_5_ComponentDidUpdate


class Updating_5_ComponentDidUpdate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: 'John',
			day: 1,
			congratulate: '',
		}
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState)
		console.log(nextState.day)
		if (nextState.day > 31) {
			return false
		} else {
			return true
		}
	}

	doChallenge = () => {
		this.setState({
			day: this.state.day + 1,
		})
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.day == 30) {
			this.setState({
				congratulate: 'Congratulations, Challenge has been completed',
			})
		}
		console.log(prevState, prevProps)
	}
	
	
	render() {
		return (
			<div className='Updating_5_ComponentDidUpdate'>
				<h2>componentDidUpdate</h2>
				<button onClick={this.doChallenge}>Do Challenge</button>
				<p>Challenge: Day {this.state.day}</p>
				{this.state.congratulate && <p>{this.state.congratulate}</p>}
			</div>
		)
	}
}


export default Updating_5_ComponentDidUpdate