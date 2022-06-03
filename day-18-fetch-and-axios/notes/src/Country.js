// src/App.js
import React from 'react'

class Country extends React.Component {
	render() {
		const { country: { name: { common, official }, capital, flags : {png}, languages, currencies, population, capitalInfo } } = this.props
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
							{Object.keys(capitalInfo).length === 0 ? '' : (
								<p>
									<span>Capital: </span>
									{capital}
								</p>
							)}
							{languages === undefined ? '' : (
								<p>
									<span>{languages.length > 1 ? `Languages` : `Language`}: </span>
									{Object.values(languages).join(', ')}
								</p>
							)}
							{<p>
								<span>Population: </span>
								{population.toLocaleString()}
							</p>}
							{currencies === undefined ? '' : (
								<p>
									<span>{(Object.keys(currencies).length > 1) ? `Currencies` : `Currency`}: </span>
									{Object.keys(currencies).join(', ')}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Country