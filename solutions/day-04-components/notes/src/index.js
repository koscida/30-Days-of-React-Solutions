// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import appleImage from './images/apple.jpg'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={appleImage} alt='appleimage' style={{width:'150px'}}/>
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

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
const HexaColor = () => <div style={{border: '5px solid '+hexaColor()}}>{hexaColor()}</div>

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
	  <HexaColor />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)