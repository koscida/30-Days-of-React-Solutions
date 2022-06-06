import React from 'react'
import Graph from './Graph'

const PopulationGraph = (props) => {
	if(props.data.length > 0) {
		// sort the top countries
		const topCountries = props.data.sort( (a,b) => b.population - a.population ).slice(0, 10)
		
		const totalPop = props.data.reduce( (i, country) => i + country.population, 0)
		const maxPop = topCountries[0].population
		
		return <div className="populationGraph col-lg-8 col-md-10 mx-auto">
			
			<h3>{topCountries.length} Most populated countries</h3>
			<p>Total population: {totalPop.toLocaleString("en-US")} </p>
			
			<Graph
				data={topCountries.reduce( (c, { name: {common}, population }) => [...c,[common,population]], [] )}
				max={maxPop}
				/>
		</div>
	} else {
		return <></>
	}
}

export default PopulationGraph;