import React from 'react'
import Graph from './Graph'

const LanguageGraph = (props) => {
	if(props.data.length > 0) {
		
		// reduce countries to top lanauges, sort and slice to top 10
		const sortedLanguages = Object.entries(props.data.reduce( (languages, country) => {
			if(country.languages !== undefined) {
				Object.values(country.languages).forEach( lang => 
					languages[lang] === undefined 
						? languages[lang] = 1
						: languages[lang]++
				)
			}
			return languages
		}, {}))
		.sort( (a,b) => b[1] - a[1] )
		const topLanguages = sortedLanguages.slice(0, 10)
		
		const maxSpoken = topLanguages[0][1]
		const totalLang = sortedLanguages.length
		
		return <div className="populationGraph col-lg-8 col-md-10 mx-auto">
			
			<h3>{topLanguages.length} Most spoken languages</h3>
			<p>Total languages: {totalLang.toLocaleString("en-US")} </p>
			
			<Graph 
				data={topLanguages}
				max={maxSpoken}
				/>
		</div>
	} else {
		return <></>
	}
}

export default LanguageGraph;