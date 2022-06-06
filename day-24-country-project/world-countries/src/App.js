import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/App.css';

import Country from './components/Country'
import PopulationGraph from './components/PopulationGraph'
import LanguageGraph from './components/LanguageGraph'

const App = (props) => {
	// setting initial state and method to update state
	const [data, setData] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [stat, setStat] = useState('population')

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const url = (searchTerm) 
			? 'https://restcountries.com/v3.1/name/' + searchTerm
			: 'https://restcountries.com/v3.1/all'
		try {
			const response = await axios.get(url)
			const data = await response.data
			setData(data)
			setSearchResults(data)
		} catch (error) {
			console.log(error)
		}
	}
	
	const handleChange = (e) => {
		// set value
		setSearchTerm(e.target.value)
		
		// if a value, fetch data again
		if(searchTerm) {
			setSearchResults(data.filter(country => {
				const n1 = country.name.common.toLowerCase().includes(searchTerm)
				const n2 = country.name.official.toLowerCase().includes(searchTerm)
				const c = country.capital !== undefined && country.capital.length > 1 && country.capital.map(x => x.toLowerCase()).includes(searchTerm)
				const l = country.languages !== undefined && country.languages.length > 1 && Object.values(country.languages).map(x => x.toLowerCase()).includes(searchTerm)
				return n1 || n2 || c || l
			}
			))
		}
	}
	
	return (
		<div className='App'>
			
			<header className='text-white text-center p-lg-5 p-md-3 p-1'>
				<a name="home"></a>
				<div className='container-fluid'>
					<h1 className='fw-bold m-3'>World Countries Data</h1>
					<p className='subtitle'>
						There are {data.length} countries loaded using the&nbsp;
						<a href='https://restcountries.com/' target="_blank" >Countries API</a>
					</p>
				</div>
			</header>
			
			<section className='controls text-center p-lg-5 p-md-3 p-1'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-9'>
							<input 
								type="text" 
								onChange={handleChange} 
								name="searchTerm" 
								id="searchTerm" 
								className='form-conrtol flex-fill w-100' 
								placeholder='Search countries by name, city, and languages' />
							{searchTerm ? (<p className='feedback my-3'>
								{searchResults.length} satisfied the search criteria
								</p>)
								: <></>}
						</div>
						<div className='col-md-3'>
							<a href="#stat" className='graphIcon flex-fill'>
								<i className='fa-solid fa-chart-bar m-2'></i>
							</a>
						</div>
					</div>
				</div>
			</section>
			
			<section className='countries-wrapper py-lg-5 py-md-3 py-1'>
				<div className='container-fluid'>
					<div className='row'>
						{searchResults.map((c) => <Country country={c} key={c.cca3} />)}
					</div>
				</div>
			</section>
			
			<section className='graph-wrapper p-lg-5 p-md-3 p-1'>
				<a name="stat"></a>
				<div className='container-fluid'>
					<div className='row'>
						<div className='text-center m-2'>
							<button className='btn btn-danger btn-lg m-3' onClick={() => setStat('population')}>Population</button>
							<button className='btn btn-danger btn-lg m-3' onClick={() => setStat('languages')}>Languages</button>
						</div>
					</div>
					<div className='row'>
						{stat === 'population' ? <PopulationGraph data={searchResults} /> : <LanguageGraph data={searchResults} /> }
					</div>
				</div>
			</section>
			
			<div className='topScroll m-5 d-flex justify-content-end'>
				<a href="#top"><i className='fa-solid fa-arrow-alt-circle-up'></i></a>
			</div>
			
			<footer className='text-white text-center p-lg-5 p-md-3 p-1'>
				<div className='container-fluid'>
					<p className='fw-light'>Copyright &copy;2022 Koscida</p>
				</div>
			</footer>
			
		</div>
	)
}

export default App;
