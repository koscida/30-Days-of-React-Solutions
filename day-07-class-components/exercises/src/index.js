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
			<li>How do you write a pure JavaScript function<br/>with function or arrow syntax</li>
			<li>What is inheritance and how do you make a child from a parent class?<br/>extend</li>
			<li>What is class based React component ?<br/>class Component extends React.Component{}</li>
			<li>What is the difference between functional React component and class based React component ?<br/>function vs class</li>
			<li>When do we need to use class based components instead of functional components<br/>to access lifecycle among other things</li>
			<li>What is the use cases of class based component ?<br/></li>
			<li>Which type of component do use most frequently ? functional or class-based component</li>
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

const evenStyles = { background: '#21bf73' }
const oddStyles = { background: '#fddb3a' }
const primeStyles = { background: '#fd5e53' }
// const NumberColor = ({ start, length }) => Array.from({length: length}, (_, i) => i + start).map( x => {
// 	const style = (x%2===0) ? evenStyles : ((factorial(x)===undefined) ? primeStyles : oddStyles)
// 	return (
// 		<div key={x} style={style}>{x}</div>
// 	)
// })
class NumberColor extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { start, length } = this.props
		return Array.from({length: length}, (_, i) => i + start).map( x => {
			const style = (x%2===0) ? evenStyles : ((factorial(x)===undefined) ? primeStyles : oddStyles)
			return (
				<div key={x} style={style}>{x}</div>
			)
		})
	}
}
const hexaColor = () => {
	let str = '0123456789abcdef'
	let color = ''
	for (let i = 0; i < 6; i++) {
	  let index = Math.floor(Math.random() * str.length)
	  color += str[index]
	}
	return '#' + color
}
// const HexColor = ({ start, length }) => Array.from({length: length}, (_, i) => i + start).map( x => {
// 	const color = hexaColor()
// 	return (
// 		<div key={x} style={{background: color}}>{color}</div>
// 	)
// })
class HexColor extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const { start, length } = this.props
		return Array.from({length: length}, (_, i) => i + start).map( x => {
			const color = hexaColor()
			return (
				<div key={x} style={{background: color}}>{color}</div>
			)
		})
	}
}
class Exercise2 extends React.Component {
	render() {
		return (
	<div>
		<h2>Exercises: Level 2</h2>
		<ol>
			<li>
			Learn more about class based component by changing previous days exercises to class based components
			</li>
		</ol>
		<p>Number colors</p>
		<div className='numberColor'>
					<NumberColor 
						start={0}
						length={32}
					/>
				</div>
				<p>Hexa colors</p>
				<div className='numberColor'>
					<HexColor 
						start={0}
						length={32}
					/>
				</div>
	</div>
	)}
}


const totalPop = 7693165599
const countryData = [
	{ 'name': "World",		"pop": 7693165599 },
	{ 'name': "China", 		"pop": 1377422166 },
	{ 'name': "India",		"pop": 1295210000 },
	{ 'name': "USA", 		"pop": 323947000 },
	{ 'name': "Indonesia",	"pop": 258705000 },
	{ 'name': "Brazil", 	"pop": 206135893 },
	{ 'name': "Pakistan",	"pop": 194125062 },
	{ 'name': "Nigeria", 	"pop": 186988000 },
	{ 'name': "Bangladesh", "pop": 161006790 },
	{ 'name': "Russia",		"pop": 146599183 },
	{ 'name': "Japan", 		"pop": 126960000 },
]
const CountryData = ({data: { name, pop }}) => {
	const width = (pop / totalPop * 100 ) + "%"
	return (<div key={name}>
		<div>{name}</div>
		<div><div className='bar' style={{width: width}}></div></div>
		<div>{pop}</div>
	</div>)
}
//
class PopulationGraph extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return countryData.map( x => <CountryData key={x.name} data={x}/> )
	}
}
const exercise3 = (
	<div>
		<h1>Exercise 3</h1>
		<ol>
			<li>Make the following bar group using the given data<br/>
				<h2>World Population</h2>
				<div className='populationGraph'>
					<PopulationGraph />
				</div>
			</li>
		</ol>
	</div>
)



// JSX element, app, a container or a parent
const app = (
	<div>
		{exercise1}
		<hr/>
		<Exercise2 />
		<hr/>
		{exercise3}
	</div>
)

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
    {app}
  </React.StrictMode>
);
