// src/App.js
import React from 'react'
import Exercise2 from './Exercise2'
import Exercise3 from './Exercise3'

// Exercises: Level 1

// What is HTTP request?
// request to site

// What are the most common HTTP requests?
// apis?

// What is fetch?
// fetch(url)
// .then((data) => {})

// What is axios?
// npm i axios
// import axios from 'axios'
// axios.get(url)
// .then((response) => {})

// What is the difference between fetch and axios?
// native vs library

// Do you prefer fetch to axios for make HTTP requests?
// ?


// Exercises: Level 2

class App extends React.Component {
	render() {
		return (
			<div className='app container'>
				<Exercise2 />
				<Exercise3 />
			</div>
		)
	}
}

export default App