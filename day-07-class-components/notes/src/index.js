import React from 'react';
import ReactDOM from 'react-dom/client';



// Pure JavaScript class and child
// Imagine this what we import from React package
class Component {
	constructor(props) {}
  }
  
  // This how we make class based components by inheriting from the parent
  class Child extends Component {
	constructor(props) {
	  super(props)
	}
}



// class based component
class HeaderComponent extends React.Component {
	render() {
	  return (
		<header>
		  <div className='header-wrapper'>
			<h1>Welcome to 30 Days Of React</h1>
			<h2>Getting Started React</h2>
			<h3>JavaScript Library</h3>
			<p>Asabeneh Yetayeh</p>
			<small>Oct 7, 2020</small>
		  </div>
		</header>
	  )
	}
}

// class base component with props
class HeaderProps extends React.Component {
	constructor(props) {
	  super(props)
	  // the code inside the constructor run before any other code
	}
	render() {
	  return (
		<header>
        <div className='header-wrapper'>
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>
            {this.props.data.author.firstName} {this.props.data.author.lastName}
          </h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
	  )
	}
}

// class base component with props deconstructed
class HeaderPropsDeconstructed extends React.Component {
	constructor(props) {
	super(props)
	// the code inside the constructor run before any other code
	}
	render() {
		console.log(this.props.data)
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
		</div>
	</header>
	)
	}
}

// class based component with method
class HeaderMethod extends React.Component {
	greetPeople = () => {
	  alert('Welcome to 30 Days Of React Challenge, 2020')
	}
	render() {
	  return (
		<header>
		  <div className='header-wrapper'>
			<h1>Welcome to 30 Days Of React</h1>
			<h2>Getting Started React</h2>
			<h3>JavaScript Library</h3>
			<p>Asabeneh Yetayeh</p>
			<small>Oct 7, 2020</small>
			<button onClick={this.greetPeople}> Greet </button>
		  </div>
		</header>
	  )
	}
  }

// TechList Component
// class base component
class TechList extends React.Component {
	constructor(props) {
	  super(props)
	}
	render() {
		const { techs } = this.props
		const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
		return techsFormatted
	}
}

// Main Component
// Class Component
class Main extends React.Component {
	constructor(props) {
	  super(props)
	}
	render() {
	  return (
		<main>
		  <div className='main-wrapper'>
			<p>Prerequisite to get started react.js:</p>
			<ul>
			  <TechList techs={this.props.techs}  />
			</ul>
		  </div>
		</main>
	  )
	}
}

// Footer Component
// Class component
class Footer extends React.Component {
	constructor(props) {
	  super(props)
	}
	render() {
	  return (
		<footer>
		  <div className='footer-wrapper'>
		  <p>Copyright {this.props.date.getFullYear()}</p>
		  </div>
		</footer>
	  )
	}
}
  
  

// The App, or the parent or the container component
// Class Component
class App extends React.Component {
	constructor(props) {
	  super(props)
	}
	render() {
		const techs = ['HTML', 'CSS', 'JavaScript']
		const data = {
			welcome: 'Welcome to 30 Days Of React',
			title: 'Getting Started React',
			subtitle: 'JavaScript Library',
			author: {
			  firstName: 'Asabeneh',
			  lastName: 'Yetayeh',
			},
			date: 'Oct 7, 2020',
		  }
	  return (
		<div className='app'>
		  <HeaderComponent />
		  <HeaderProps data={data} />
		  <HeaderPropsDeconstructed data={data} />
		  <HeaderMethod />
		  <Main techs={techs} />
		  <Footer date={new Date()} />
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