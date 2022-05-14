//index.js
// importing the react and react-dom package
import React from 'react'
import ReactDOM from 'react-dom'

import appleImage from './images/apple.jpg'


// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const header = (
	<header>
		<div className='header-wrapper'>
			<h1>{welcome}</h1>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
			<p>Instructor: Asabeneh Yetayeh</p>
			<small>Date: Oct 1, 2020</small>
		</div>
	</header>
)

const photoStyles = {'max-width': '100px'}
const photo = (
	<div>
	  <img src={appleImage} style={photoStyles} alt='apple image'/>
	</div>
  )

// JSX element, main
const main = (
	<main>
		<div className='main-wrapper'>
			<p>Prerequisite to get started react.js:</p>
			<ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
			</ul>
			{photo}
		</div>
	</main>
)

// JSX element, footer
const footer = (
	<footer>
		<div className='footer-wrapper'>
			<p>Copyright 2020</p>
		</div>
	</footer>
)

// JSX element, app, a container or a parent
const app = (
	<div>
		{header}
		{main}
		{footer}
	</div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement)
// or
//  ReactDOM.render([header, main, footer], rootElement)