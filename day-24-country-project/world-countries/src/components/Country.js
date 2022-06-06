// src/App.js
import React from 'react'

const Country = ({ country: { name: { common, official }, capital, flags : {png}, languages, currencies, population, capitalInfo } }) => {
	return (
		<div className='col-md-6 col-lg-3 mb-4'>
			<div className='country card'>
				<div className='card-img-top country-image'>
					<img src={png} alt={common} />
				</div>
				<div className='card-body'>
					<h5 className="card-title">{common.toUpperCase()}</h5>
					<div className='card-text country_text'>
						<p>
							<span>Official Name: </span>
							{official}
						</p>
						<p>
							<span>Capital: </span>
							{Object.keys(capitalInfo).length === 0 ? 'None' : Object.values(capital).join(', ')}
						</p>
						<p>
							<span>{languages === undefined || !(languages.length > 1) ? `Language` : `Languages`}: </span>
							{languages === undefined ? 'None' : Object.values(languages).join(', ')}
						</p>
						{<p>
							<span>Population: </span>
							{population.toLocaleString()}
						</p>}
						<p>
							<span>{currencies === undefined || !(Object.keys(currencies).length > 1) ? `Currency` : `Currencies`}: </span>
							{currencies === undefined ? 'None' : Object.keys(currencies).join(', ')}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Country