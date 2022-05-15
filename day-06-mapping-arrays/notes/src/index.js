import React from 'react';
import ReactDOM from 'react-dom/client';


const Numbers = ({ numbers }) => {
	// modifying array to array of li JSX
	const list = numbers.map((number) => <li key={number}>{number}</li>)
	return list
}

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
	<li>
	  {tech} {level}
	</li>
)
const Skills = ({ skills }) => {
	const skillsList = skills.map((skill) => <Skill skill={skill} key={skill} />)
	//console.log(skillsList)
	return <ul>{skillsList}</ul>
}

// Country component
const Country = ({ country: { name, city } }) => {
	return (
	  <div>
		<h2>{name}</h2>
		<small>{city}</small>
	  </div>
	)
}
// countries component
const Countries = ({ countries }) => {
	const countryList = countries.map((country) => <Country key={country.name} country={country} />)
	return <div>{countryList}</div>
}
  
const App = () => {
	const numbers = [1, 2, 3, 4, 5]
	const skills = [
		['HTML', 10],
		['CSS', 7],
		['JavaScript', 9],
		['React', 8],
	]
	const countries = [
		{ name: 'Finland', city: 'Helsinki' },
		{ name: 'Sweden', city: 'Stockholm' },
		{ name: 'Denmark', city: 'Copenhagen' },
		{ name: 'Norway', city: 'Oslo' },
		{ name: 'Iceland', city: 'Reykjavík' },
	]
	
	return (
		<div className='container'>
			<div>
				<h1>Numbers List</h1>
				{[1, 2, 3, 4, 5]}
				<h1>Numbers List</h1>
				<ul>
					<Numbers numbers={numbers} />
				</ul>
				
				<h1>Skills Level</h1>
        		<Skills skills={skills} />
				
				<h1>Countries List</h1>
      			<Countries countries={countries} />
			</div>
		</div>
	)
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

