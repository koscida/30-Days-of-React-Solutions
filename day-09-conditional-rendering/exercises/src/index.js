//index.js
// importing the react and react-dom package
import React from 'react'
import ReactDOM from 'react-dom/client'

import img from './images/frontend_technologies.png'
import apple from './images/apple.jpg'



const exercise1 = (
	<div>
		<h1>Exercises: Level 1</h1>
		<ol>
			<li>What is conditional rendering?<br/>Rendering based on a condition</li>
			<li>How do you implement conditional rendering?<br/>display an jsx element based on a condition</li>
			<li>Which method of conditional rendering do you prefer to use?<br/>any</li>
		</ol>
	</div>
)

const DisplayOptions = ({ options }) => options.map(x => <span className={x} key={x}>{x}</span> )
class Exercise2 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
	<div>
		<h1>Exercises: Level 2</h1>
		<ol>
			<li>
				Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)<br/>
				Season: {this.props.season}<br/>
				Options: <DisplayOptions options={['spring','summer','fall','winter']} />
			</li>
			<li>
				Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)
				<br/>
				Season: {this.props.time}<br/>
				Options: <DisplayOptions options={['morning',"noon",'evening','night']} />
			</li>
		</ol>
		
	</div>
	)}
}



class LoadingData extends React.Component {
	state = {
		loaded: false
	}
	
	render() {
		setTimeout(() => {this.setState({loaded: true})}, 2000);
		const dataBlock = this.state.loaded ? <div>Data loaded! </div>: <div>Loading...</div>
		return (
			<div>
				{dataBlock}
			</div>
		)
	}
}

class Exercise3 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
	<div>
		<h1>Exercises: Level 3</h1>
		<ol>
			<li>
			Fetching data takes some amount of time. A user has to wait until the data get loaded. Implement a loading functionality of a data is not fetched yet. You can simulate the delay using setTimeout.<br/>
			<LoadingData />
			</li>
		</ol>
		
	</div>
	)}
}



// JSX element, app, a container or a parent
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			season: this.getSeason(),
			time: this.getTime()
		}
	}
	
	getSeason = () => {
		let d = new Date();
		let m = d.getMonth();
		return (m >= 2 && m <= 4) ? "spring" : (m >= 5 && m <= 7) ? "summer" : (m >= 8 && m <= 10) ? "fall" : "winter"
	}
	
	getTime = () => {
		let d = new Date();
		let h = d.getHours();
		return (h >= 5 && h <= 10) ? "morning" : (h >= 11 && h <= 16) ? "noon" : (h >= 17 && h <= 23) ? "evening" : "night"
	}
	
	render() {
		return (
			<div className={this.state.season + " " + this.state.time}>
				{exercise1}
				<hr/>
				<Exercise2 season={this.state.season} time={this.state.time} />
				<hr/>
				<Exercise3/>
			</div>
		)
	}
}

// deprecated in react 18
// const rootElement = document.getElementById('root')
// // we render the JSX element using the ReactDOM package
// // ReactDOM has the render method and the render method takes two argument
// ReactDOM.render(app, rootElement)
// // or
// //  ReactDOM.render([header, main, footer], rootElement)


// use this instead
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
