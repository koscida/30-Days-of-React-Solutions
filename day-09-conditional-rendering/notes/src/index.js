import React from 'react';
import ReactDOM from 'react-dom/client';



class App extends React.Component {
	
	// declaring state
	state = {
	  count: 0,
	  image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
	}
	
	
	// method which subtract one to the state
	minusOne = () => {
		this.setState({ count: this.state.count - 1 })
	}
	
	changeAnimal = () => {
		let dogURL =
		  'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
		let catURL =
		  'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
		let image = this.state.image === catURL ? dogURL : catURL
		this.setState({ image })
	  }

	render() {
		// accessing the state value
		const count = this.state.count
		return (
			<div className='App'>
				<h1>{count} </h1>
				
				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Add One
				</button>
				<button onClick={this.minusOne}>
					Minus One
				</button>
				
				<div className='animal'>
					<img src={this.state.image} alt='animal' />
				</div>
				<button onClick={this.changeAnimal} class='btn btn-add'>
					Change
				</button>
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