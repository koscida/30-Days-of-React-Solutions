// src/App.js
import React from 'react'

// //////////////
// Exercises: Level 1

// What is higher order function
// function that takes a callback function as an argument

// What is Higher Order Component
// component that takes a component as an argument
// this is not a built-in React component, but a design pattern that emerges because js loves passing callback functions

// What is the difference between higher order function and higher order component?
// a function will return a function, a component will return a component

// A higher order component can allow us to enhance a component. (T or F)
// 


// //////////////
// Exercises: Level 2
// Make a higher order component which can handle all the input type.

// input display component
const InputComponent = ({ text, onChange, style, type }) => (
	<div className='mb-3'>
		<label className='form-label' htmlFor={text}>{text}</label>
		<input className='form-control' style={style} placeholder={text} id={text} onChange={onChange} type={type} />
	</div>
)

const inputWithStyles = (WrappedComponent, type = 'text') => {
	// const colors = [
	// 	{
	// 		name: 'default',
	// 		backgroundColor: '#e7e7e7',
	// 		color: '#000000',
	// 	},
	// ]
	//const { backgroundColor, color } = colors.find((c) => c.name === name)

	const inputStyles = {}
	
	return (props) => {
		return <WrappedComponent {...props} style={inputStyles} />
	}
}


// HTML Inputs
/* 
<input type="text">

<input type="number">
<input type="password">
<input type="email">
<input type="tel">

<input type="checkbox">
<input type="radio">

<input type="date">
<input type="time">
<input type="datetime-local">
<input type="week"> 
<input type="month">

<input type="range">
<input type="url">
<input type="color">

<input type="file">
<input type="image">

<input type="button">
<input type="search">

<input type="reset">
<input type="submit">

<input type="hidden">

*/

// const InputText = inputWithStyles(Input, 'text')
// const InputNumber = inputWithStyles(Input, 'number')
// const InputPassword = inputWithStyles(Input, 'password')
// const InputEmail = inputWithStyles(Input, 'email')
// const InputTel = inputWithStyles(Input, 'tel')
const Input = inputWithStyles(InputComponent, null)

class App extends React.Component {
	render() {
		return (
			<div className='App container'>
				<Input type='text' text='Text' />
				
				<Input type='number' text='Number' />
				<Input type='password' text='Password' />
				<Input type='email' text='Email' />
				<Input type='tel' text='Telephone' />
			</div>
		)
	}
}

export default App