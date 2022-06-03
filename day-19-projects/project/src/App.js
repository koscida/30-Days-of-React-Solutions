// src/App.js
import React from "react";
import axios from "axios";

class App extends React.Component {
	state = {
		data: [],
	};

	componentDidMount() {
		this.fetchCountryData();
	}

	fetchCountryData = async () => {
		const url = "https://api.thecatapi.com/v1/breeds";

		try {
			const response = await axios.get(url);
			const data = await response.data;

			this.setState({
				data,
			});
		} catch (error) {
			console.log(error);
		}
	};

	avgWeightImperial = () =>
		this.state.data.length > 0
			? (
					this.state.data
						.map((cat) => {
							const range = cat.weight.imperial.replace(/\s/g, "").split("-");
							return Number(range[0]) + Number(range[1]) / 2;
						})
						.reduce((i, x) => x + i) / this.state.data.length
			  ).toFixed(2)
			: "";

	avgWeightMetric = () =>
		this.state.data.length > 0
			? (
					this.state.data
						.map((cat) => {
							const range = cat.weight.metric.replace(/\s/g, "").split("-");
							return Number(range[0]) + Number(range[1]) / 2;
						})
						.reduce((i, x) => x + i) / this.state.data.length
			  ).toFixed(1)
			: "";

	avgLifeSpan = () =>
		this.state.data.length > 0
			? (
					this.state.data
						.map((cat) => {
							const range = cat.life_span.replace(/\s/g, "").split("-");
							return Number(range[0]) + Number(range[1]) / 2;
						})
						.reduce((i, x) => x + i) / this.state.data.length
			  ).toFixed(2)
			: "";

	displayCats = () => (
		<div className="row">
			{this.state.data.length > 0
				? this.state.data.map((cat) => {
						const catImage = cat.image ? (
							<img src={cat.image.url} alt={cat.name} />
						) : (
							<img src="./images/no_cat.png" alt="stylized cat" />
						);
						return (
							<div className="col-lg-3 col-md-2">
								<div className="card cat mb-2">
									<div className="card-img-top">{catImage}</div>
									<div class="card-body">
										<h5 class="card-title">{cat.name}</h5>
										<p>
											<b>{cat.origin}</b>
										</p>
										<p>
											<span className="text-muted">Temperament: </span>
											{cat.temperament}
										</p>
										<p>
											<span className="text-muted">Life Span: </span>
											{cat.life_span}
										</p>
										<p>
											<span className="text-muted">Weight: </span>
											{cat.weight.metric} kg ({cat.weight.imperial} lb)
										</p>
										<p>
											<span className="text-muted">Description</span>
										</p>
										<p>{cat.description}</p>
									</div>
								</div>
							</div>
						);
				  })
				: "Loading cats..."}
		</div>
	);

	render() {
		return (
			<div className="app container">
				<div className="text-center">
					<h1>30 Days Of React</h1>
					<h3>Cats Paradise</h3>
					<p>There are {this.state.data.length} cat breeds</p>
					<p>
						On average a cat can weight about {this.avgWeightMetric()} Kg (
						{this.avgWeightImperial()} lb) and lives {this.avgLifeSpan()} years.
					</p>
				</div>
				{this.displayCats()}
			</div>
		);
	}
}

export default App;
