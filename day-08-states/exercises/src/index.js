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
			<li>What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.<br/>happy to learn react</li>
			<li>What is state in React ?<br/>state within a react component</li>
			<li>What is the difference between props and state in React ?<br/>props come from parent, state is contained within component</li>
			<li>How do you access state in a React component ?<br/>state</li>
			<li>How do you set a set in a React component ?<br/>setState</li>
		</ol>
	</div>
)




// factorial function pulled from day 01, part 8 functions, exercise 3-4
const factorial = (num) => {
	const arr = Array.from({length: num/2 - 1}, (_, i) => i + 2)
	for(var i=0;i<arr.length;i++) {
		if(num % arr[i] === 0)
			return arr[i]
	}
}


class CountryData extends React.Component {
	countryData = [
		{
			"alphanumeric": "WNC07WVR7PG",
			"country": "Mexico",
			"phone": "(372) 273-5198",
			"region": "Rheinland-Pfalz",
			"text": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
			"list": 15
		},
		{
			"alphanumeric": "IOG76RST8SB",
			"country": "Spain",
			"phone": "(902) 346-5715",
			"region": "Puglia",
			"text": "velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque",
			"list": 11
		},
		{
			"alphanumeric": "WFQ11MCO7SO",
			"country": "Ireland",
			"phone": "(211) 718-9159",
			"region": "North Chungcheong",
			"text": "justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,",
			"list": 13
		},
		{
			"alphanumeric": "JJS38JCG7OO",
			"country": "Singapore",
			"phone": "1-568-829-5317",
			"region": "South Gyeongsang",
			"text": "dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse",
			"list": 11
		},
		{
			"alphanumeric": "VEB29AEL7MB",
			"country": "Colombia",
			"phone": "(348) 649-3834",
			"region": "Yên Bái",
			"text": "ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit",
			"list": 19
		}
	]
	state = { ...this.countryData[0] }
	
	selectCountry = () => {
		let i = Math.floor(Math.random() * this.countryData.length)
		this.setState({ ...this.countryData[i] })
	}
	
	render() {
		return (
			<div>
				<div>
					<p><b>Country</b>: {this.state.country}</p>
					<p><b>Region</b>: {this.state.region}</p>
					<p><b>Phone</b>: {this.state.phone}</p>
					<p><b>ID</b>: {this.state.alphanumeric}</p>
					<p><b>Description</b>: {this.state.text}</p>
				</div>
				<button onClick={this.selectCountry}>Select Country</button>
			</div>
		)
	}
	
}

class Exercise2 extends React.Component {
	constructor(props) {
		super(props)
	}
	switchMode = () => this.props.switchMode()
	render() {
		return (
	<div>
		<h1>Exercises: Level 2</h1>
		<ol>
			<li>
			Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.<br/>
			<button onClick={this.switchMode}>Change Mode</button>
			</li>
			<li>
				After long time of lock down, you may think of travelling and you do not know where to go. 
				You may be interested to develop a random country selector that selects your holiday destination.
				<br/>
				<CountryData />
			</li>
		</ol>
		
	</div>
	)}
}




// JSX element, app, a container or a parent
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		appStyleClass: 'lightMode'
	}
	
	switchMode = () => {
		let appStyleClass = this.state.appStyleClass === 'lightMode' ? 'darkMode' : 'lightMode'
		this.setState({ appStyleClass  })
	}
	
	render() {
		return (
			<div className={this.state.appStyleClass}>
				{exercise1}
				<hr/>
				<Exercise2 switchMode={this.switchMode}/>
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
