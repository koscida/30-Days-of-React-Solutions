//index.js
// importing the react and react-dom package
import React from 'react'
import ReactDOM from 'react-dom/client'

import ex1_import from './exercise1_import.js'
import img from './images/frontend_technologies.png'
import apple from './images/apple.jpg'


// does not work
const imp = ex1_import
const exercise1 = (
	<div>
		<p>10. Try to make a different custom module in a different file and import it to index.js.</p>
		{imp} 
	</div>
)

const subscribeElement = (
	<>
		<div className='subscribe' style={{background: '#f9f7f7', padding: '20px', 'font-family':'tahoma, sans-serif'}}>
			<div style={{background: '#c2e6f4', 'border-radius':'5px', padding: '20px', display: 'flex', 'flex-direction': 'column', 'align-items': 'center' }}>
				<h1 style={{'margin':'5px', padding: '0'}}>Subscribe</h1>
				<p style={{'margin':'20px', padding: '0'}}>Sign up with your email address to receive news and updates</p>
				<div>
					<input type='text' id='firstname' placeholder='First name' style={{'border': 0, 'border-radius':'5px', 'margin':'5px', 'padding':'10px', color:'#888'}} />
					<input type='text' id='lastname' placeholder='Last name' style={{'border': 0, 'border-radius':'5px', 'margin':'5px', 'padding':'10px', color:'#888'}} />
					<input type='text' id='email' placeholder='Email' style={{'border': 0, 'border-radius':'5px', 'margin':'5px', 'padding':'10px', color:'#888'}} />
				</div>
				<button style={{background:'#f37474', 'border-radius':'5px', 'border':0, 'margin':'20px', padding: '10px 100px', color: 'white'}}>Subscribe</button>
			</div>
		</div>
	</>
)
const exercise2 = (
	<div>
		<p>1. Import and render the following images</p>
		<img src={img} style={{'width':'100%'}} alt='front end technologies'/>
		<p>2. Use h1, p, input and button HTML elements to create the following design using JSX</p>
		{subscribeElement}
	</div>
)

const listElementStyle = {'display': 'inline-block', margin:'0 10px 10px 0', 'padding': '5px', 'background': '#29cfcf', 'border-radius': '5px', 'color': 'white'}
const skills = ['HTML','CSS',"Sass","JS","React","Redux","Node","MongoDB","Python","Flask","Django","NumPy","Pandas","Data Analysis","MYSQL","GraphQL","D3.js","Gatsby","Docker","Heroku","Git"]
const skillList = skills.map((x) => <li key={x} style={listElementStyle}>{x}</li>)
const userCard = (
	<div style={{background: '#f4f4f4', padding:'5px 10px', 'font-family': 'sans-serif'}}>
		<div style={{'border-radius': '5px', background:'white', padding:'20px'}}>
			<img src={apple} alt="" style={{'border-radius': '50%', width: '150px', border:'1px solid #fbfbfb'}}/>
			<h1 style={{'text-transform': 'uppercase', 'font-size': '1em'}}>Sally Brown <span style={{display: 'inline-block', width: '1em', height:'1em',background:'#29cfcf','border-radius':'50%', 'margin-left': '3px'}}></span></h1>
			<p>Developer, Earth</p>
			<h2 style={{'text-transform': 'uppercase', 'font-size': '1em'}}>Skills</h2>
			<ul style={{'list-style-type': 'none', padding: '0'}}>{skillList}</ul>
			<p><span style={{display: 'inline-block', width: '1em', height:'1em',background:'#444','border-radius':'50%', 'margin-right': '3px'}}></span>Joined on Aug 30, 2020</p>
		</div>
	</div>
)
const exercise3 = (
	<div>
		<p>1. Design the following user card.</p>
		{userCard}
	</div>
)


// JSX element, app, a container or a parent
const app = (
	<div>
		<h1>Exercise 1</h1>
		{exercise1}
		<hr/>
		<h1>Exercise 2</h1>
		{exercise2}
		<hr/>
		<h1>Exercise 3</h1>
		{exercise3}
		<hr/>
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
