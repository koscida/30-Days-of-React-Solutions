// Exercises: What is React?
// skipped

// What is React?
// What is a library?
// What is a single page application?
// What is a component ?
// What is the latest version of React?
// What is DOM?
// What is React Virtual DOM?
// What does a web application or a website(composed of) have?


// Exercises: Why React?
// skipped

// Why did you chose to use react?
// What measures do you use to know popularity ?
// What is more popular, React or Vue ?


// Exercises: JSX
// skipped

// What is an HTML element?
// How to write a self closing HTML element?
// What is an HTML attribute? Write some of them
// What is JSX?
// What is babel?
// What is a transpiler?



// Exercises: JSX Elements

// What is a JSX element?
const jsxElement = (
	<p>I am a JSX element</p>
)

// Write your name in a JSX element and store it in a name variable
const nameStyles = { 'font-style': 'italic' }
const nameElement = (
	<h1 style={nameStyles}>koscida</h1>
)

// Write a JSX element which displays your full name, country, title, gender, email, phone number. 
// Use h1 for the name and p for the rest of the information and store it in a user variable
const user = {
	'full name': "Kida",
	'country': "Atlantis",
	'title': "Queen",
	'gender': "female",
	'email': "kida@email.com",
	'phone number': 8675309
}
const userInfo = (
	<div className="user">
		<h1>Full name: {user['full name']}</h1>
		<p>Country: {user.country}</p>
		<p>Title: {user.title}</p>
		<p>Gender: {user.gender}</p>
		<p>Email: {user.email}</p>
		<p>Phone number: {user['phone number']}</p>
	</div>
)

// Write a footer JSX element
const footerStyles = { border: '10px solid pink' }
const footer = (
	<div className="footer" style={footerStyles}>
		<p>this is the footer</p>
	</div>
)



// Exercises: Inline Style

// Create a style object for the main JSX
const mainStyles = { border: '10px solid purple' }
const main = (
	<div className='main' style={mainStyles}>
		{jsxElement}
		<hr/>
		{nameElement}
		<hr/>
		{userInfo}
	</div>
)

// Create a style object for the footer and app JSX
// done

// Add more styles to the JSX elements
// done


// Exercises: Internal Styles

// Apply different styles to your JSX elements
// done

// Exercise: Inject data to JSX
// done

// Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
// skip



// JSX element which contain all, it is a container or parent
const app = (
	<div className='app' style={{ margin: 0, padding: 0 }}>
		{main}
		{footer}
	</div>
)

// To get the root element from the HTML document
const rootElement = document.querySelector('.root')

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
ReactDOM.render(app, rootElement)