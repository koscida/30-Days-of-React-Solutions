import React from 'react';
import ReactDOM from 'react-dom/client';



// class based component
class Header extends React.Component {
	render() {
		const {
			welcome,
			title,
			subtitle,
			author: { firstName, lastName },
			date,
		} = this.props.data
	
		return (
			<header>
			<div className='header-wrapper'>
				<h1>{welcome}</h1>
				<h2>{title}</h2>
				<h3>{subtitle}</h3>
				<p>
				{firstName} {lastName}
				</p>
				<small>{date}</small>
				<p>Select a country for your next holiday</p>
			</div>
			</header>
		)
	}
}



// A button component
const Button = ({ text, onClick, style }) => (
	<button style={style} onClick={onClick}>
		{text}
	</button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
	backgroundColor: '#61dbfb',
	padding: 10,
	border: 'none',
	borderRadius: 5,
	margin: '3px auto',
	cursor: 'pointer',
	fontSize: 22,
	color: 'white',
}

// TechList Component
// class base component
class TechList extends React.Component {
	render() {
		const { techs } = this.props
		const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
		return techsFormatted
	}
}
  


const Login = () => (
	<div>
		<h3>Please Login</h3>
	</div>
)
const Welcome = (props) => (
	<div>
		<h1>Welcome to 30 Days Of React</h1>
	</div>
)
  
class App extends React.Component {
	state = {
		loggedIn: false,
		techs: ['HTML', 'CSS', 'JS'],
	}
	handleLogin = () => {
		this.setState({
		  	loggedIn: !this.state.loggedIn,
		})
	}

	render() {
		const data = {
			welcome: '30 Days Of React',
			title: 'Getting Started React',
			subtitle: 'JavaScript Library',
			author: {
				firstName: 'Asabeneh',
				lastName: 'Yetayeh',
			},
			date: 'Oct 9, 2020',
		}

		// let status
		// let text

		// if (this.state.loggedIn) {
		// 	status = <h3>Welcome to 30 Days Of React</h3>
		// 	text = 'Logout'
		// } else {
		// 	status = <h3>Please Login</h3>
		// 	text = 'Login'
		// }
		const status = this.state.loggedIn ? <Welcome /> : <Login />


		return (
			<div className='app'>
				<Header data={data} />
				
				{status}
				<Button
					text={this.state.loggedIn ? 'Logout' : 'Login'}
					style={buttonStyles}
					onClick={this.handleLogin}
				/>
				{!this.state.loggedIn && (
					<p>
						Please login to access more information about 30 Days Of React
						challenge
					</p>
				)}
				
				<ul>
					<TechList techs={this.state.techs} />
				</ul>
				{this.state.techs.length === 3 && (
					<p>You have all the prerequisite courses to get started React</p>
				)}
				
			</div>
		)
	}
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);