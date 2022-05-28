// src/App.js
import React from 'react'
import Ex_Sass from './Ex_Sass'
import Ex_axios from './Ex_axios'
import Ex_ReactIcons from './Ex_ReactIcons'
import Ex_moment from './Ex_moment'
import Ex_StyledComponents from './Ex_StyledComponents'
import Ex_reactstrap from './Ex_reactstrap'

class App extends React.Component {
	render() {
		return (
		<div className='App'>
			<Ex_Sass />
			<Ex_axios />
			<Ex_ReactIcons />
			<Ex_moment />
			<Ex_StyledComponents />
			<Ex_reactstrap />
		</div>
		)
	}
}

export default App