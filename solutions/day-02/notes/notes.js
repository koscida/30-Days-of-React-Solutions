// test if React is linked
console.log(React)


// JSX element
const jsxElement = <h1>I am a JSX element</h1>


// JSX element
const header = (
	<header
		style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
	>
	<h1>Welcome to 30 Days Of React</h1>
	<h2>Getting Started React</h2>
	<h3>JavaScript Library</h3>
	<p>Asabeneh Yetayeh</p>
	<small>Oct 2, 2020</small>
	</header>
)

const inputField = (
	<div>
	  <label htmlFor='firstname'>First Name</label>
	  <input type='text' id='firstname' placeholder='First Name' />
	</div>
)


const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element
const main = (
	<main className='main-wrapper'>
		<p>Prerequisite to get started react.js:</p>
		<ul>{techsFormatted}</ul>
		{inputField}
	</main>
)

// JSX element
const footerStyles = { border: '2px solid purple', background: '#ddd' }
const footer = (
	<footer style={footerStyles}>
		<p>Copyright 2020</p>
	</footer>
)

// JSX element which contain all, it is a container or parent
const app = (
	<div className='app'>
		{jsxElement}
		<hr/>
		{header}
		{main}
		{footer}
	</div>
)


// To get the root element from the HTML document
const rootElement = document.querySelector('.root')

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
ReactDOM.render(app, rootElement)