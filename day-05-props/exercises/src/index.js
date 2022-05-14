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
			<li>What is props in a React component ?<br/>properties of a component</li>
			<li>How do you access props in a React component ?<br/>dot notation</li>
			<li>What data types can we pass as props to components ?<br/>all of them</li>
			<li>What is a propTypes?<br/>?</li>
			<li>What is a default propTypes?<br/>?</li>
		</ol>
	</div>
)



const FrontEndImg = ({ img }) => <img src={img} style={{'width':'100%'}} alt='front end technologies'/>
const SubscribeElement = () =>
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
const exercise2 = (
	<div>
		<h2>Exercises: Level 2</h2>
		<ol>
		<li>Create functional components and display the following images<br/>
		<FrontEndImg img={img}/></li>
		<li>Use functional component to create the following design<br/>
		<SubscribeElement /></li>
		</ol>
	</div>
)



// user card
const listElementStyle = {'display': 'inline-block', margin:'0 10px 10px 0', 'padding': '5px', 'background': '#29cfcf', 'border-radius': '5px', 'color': 'white'}
const skills = ['HTML','CSS',"Sass","JS","React","Redux","Node","MongoDB","Python","Flask","Django","NumPy","Pandas","Data Analysis","MYSQL","GraphQL","D3.js","Gatsby","Docker","Heroku","Git"]
const skillList = skills.map((x) => <li key={x} style={listElementStyle}>{x}</li>)
const UserCard = ({ fullName: {firstName, lastName}, userImg, position, location }) =>
	<div style={{background: '#f4f4f4', padding:'5px 10px', 'font-family': 'sans-serif'}}>
		<div style={{'border-radius': '5px', background:'white', padding:'20px'}}>
			<img src={userImg} alt="" style={{'border-radius': '50%', width: '150px', border:'1px solid #fbfbfb'}}/>
			<h1 style={{'text-transform': 'uppercase', 'font-size': '1em'}}>{firstName} {lastName} <span style={{display: 'inline-block', width: '1em', height:'1em',background:'#29cfcf','border-radius':'50%', 'margin-left': '3px'}}></span></h1>
			<p>{position}, {location}</p>
			<h2 style={{'text-transform': 'uppercase', 'font-size': '1em'}}>Skills</h2>
			<ul style={{'list-style-type': 'none', padding: '0'}}>{skillList}</ul>
			<p><span style={{display: 'inline-block', width: '1em', height:'1em',background:'#444','border-radius':'50%', 'margin-right': '3px'}}></span>Joined on Aug 30, 2020</p>
		</div>
	</div>
// Hexadecimal color generator
const hexaColor = () => {
	let str = '0123456789abcdef'
	let color = ''
	for (let i = 0; i < 6; i++) {
	  let index = Math.floor(Math.random() * str.length)
	  color += str[index]
	}
	return '#' + color
}
const HexaColor = () => <div style={{background: hexaColor(), color: 'white', 'text-shadow':'#666 0px 0px 3px', 'padding':'10px', margin: '5px'}}>{hexaColor()}</div>
const HexaColors = () => {
	const colors = []
	for (let i = 0; i < 6; i++) {
		colors.push(HexaColor())
	}
	return colors
}
const exercise3 = (
	<div>
		<h1>Exercise 3</h1>
		<ol>
		<li>Use the given hexadecimal color generator in the example to create these random colors. 
			If you don't know how to generate the hexadecimal color you can use dummy data generator<br/>
		<HexaColors />
		</li>
		<li>Use functional component to design the following user card.<br/>
		<UserCard 
			fullName={{'firstName': "Sally", 'lastName': "Brown"}}
			userImg={apple}
			position={"Developer"}
			location={"Earth"}
		/></li>
		</ol>
	</div>
)



// JSX element, app, a container or a parent
const app = (
	<div>
		{exercise1}
		<hr/>
		{exercise2}
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
