// src/App.js
import React from 'react'

// /////////////////////////////////////////////
// Updating_2_ShouldComponentUpdate

// return a boolean
// if does not return true will not update

// certain point(game, subscription) or may be to block a certain user.


class Updating_2_ShouldComponentUpdate extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: 'John',
			day: 1,
			congratulate: '',
		}
	}

	// Not working... b/c using state and props..
	//
	shouldComponentUpdate(nextProps, nextState) {
		console.log(nextProps, nextState)
		console.log(nextState.day)
		if (nextState.day > 31) {
			return false
		} else {
			return true
		}
	}

	// the doChallenge increment the day by one
	doChallenge = () => {
		this.setState({
			day: this.state.day + 1,
		})
	}
  
	render() {
		return (
			<div className='Updating_2_ShouldComponentUpdate'>
				<h2>shouldComponentUpdate</h2>
				<button onClick={this.doChallenge}>Do Challenge</button>
				<p>Challenge: Day {this.state.day}</p>
				{this.state.congratulate && <h2>{this.state.congratulate}</h2>}
			</div>
		)
	}
}


export default Updating_2_ShouldComponentUpdate