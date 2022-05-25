// src/index.js
// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'


// Exercises 1

// What is an event?
//	Action or occurance recognized by dom
// What is the different between an HTML element event and React event?
//	HTML
//		onclick (lowercase c)
//		can use return false to prevent click
// 	React
//		onClick
//		must use preventDefault() instead of return false
// What are the most common mouse and keyboard events?
//	onClick and onKeyPress
// Write at least 4 keyboard events?
//	onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag
// Write at least 8 mouse events?
//	onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, 
// Write an event specific to input element?
//	onInput, onChange, onBlur
// Write an event specific to form element?
//	onSubmit
// Display the coordinate of the view port when a mouse is moving on the body?
// 	e.clientX, e.clientY
// What is the difference between onInput, onChange and onBlur?
//	onInput - fired when begin input into field
//	onBlur - fired when move away from an object
//	onChange - fired when field value changed and loses focus
// Where do we put the onSubmit event ?
//	In form element


// Exercises 2

// Implement the following using onMouseEnter event

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		x: Math.floor(window.innerWidth / 2), 
		y: Math.floor(window.innerHeight / 2),
	}
	
	// triggered whenever the mouse moves
	handleMouseEnter = (e) => {
		this.setState({ 
			x: Math.floor(Math.random() * window.innerWidth), 
			y: Math.floor(Math.random() * window.innerHeight) 
		})
		console.log(this.state.x, this.state.y)
	}
	
	
	render() {
		const styles = {
			background: 'pink',
			padding: '20px',
			position: 'absolute',
			left: this.state.x,
			top: this.state.y,
		}
		return (
			<div>
				<div style={styles} onMouseEnter={this.handleMouseEnter}>Try to Click me</div>
			</div>
		)
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);