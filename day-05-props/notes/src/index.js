// index.js
import React from 'react'
import ReactDOM from 'react-dom'


// Header Component
// OLD
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
// }
// const date = 'Oct 4, 2020'
// const Header = () => (
// 	<header>
// 	  <div className='header-wrapper'>
// 		<h1>{welcome}</h1>
// 		<h2>{title}</h2>
// 		<h3>{subtitle}</h3>
// 		<p>
// 		  {author.firstName} {author.lastName}
// 		</p>
// 		<small>{date}</small>
// 	  </div>
// 	</header>
// )
// NEW
// Object props type
// String props type
const Header = (props) => {
	console.log(props)
	return (
	  <header>
		<div className='header-wrapper'>
		  <h1>{props.welcomeData.welcome}</h1>
		  <h2>{props.welcomeData.title}</h2>
		  <h3>{props.welcomeData.subtitle}</h3>
		  <p>
			{props.firstName} {props.lastName}
		  </p>
		  <small>{props.date}</small>
		</div>
	  </header>
	)
}

// Number props type
const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => <p>The weight of the object on earth is {props.weight} N.</p>

// Boolean props type
const Status = (props) => <p>{props.status ? 'Old enough to drive' : 'Too young for driving'}</p>

// Array props type
const Skills = (props) => <ul>{props.skills.map((skill) => <li>{skill}</li>)}</ul>

// Function prop types
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// OLD
// const App = () => (
//   <div className='app'>
//     <Header />
//   </div>
// )
// NEW
// Functional Component
const App = () => {
	const welcomeData = {
		welcome: 'Welcome to 30 Days Of React',
		title: 'Getting Started React',
		subtitle: 'JavaScript Library'
	}
	
	const firstName = 'Asabeneh'
	const lastName = 'Yetayeh'
	const date = 'Oct 4, 2020'
	
	let currentYear = 2020
	let birthYear = 1820
	const age = currentYear - birthYear
	const gravity = 9.81
	const mass = 75
	let status = age >= 18
	const skills = ['HTML', 'CSS', 'JavaScript']
	
	// Functional Component
	const sayHi = () => {
		alert('Hi')
	}
	const greetPeople = () => {
		alert('Welcome to 30 Days Of React Challenge, 2020')
	}
	
	  
  	return (
		<div className='app'>
			<Header
				welcomeData={welcomeData}
				firstName={firstName}
				lastName={lastName}
				date={date}
			/>
			
			<Age age={age} />
      		<Weight weight={gravity * mass} />
			<Status status={status} />
			
			<Skills skills={skills} />
			
			<Button text='Say Hi' onClick={sayHi} />
			<Button text='Greet People' onClick={greetPeople} />
      		<Button text='Show Time' onClick={() => alert(new Date())} />
		</div>
	)
}

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)