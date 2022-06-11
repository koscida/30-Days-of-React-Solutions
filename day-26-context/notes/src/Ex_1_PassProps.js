import React from 'react'

function Button (props) {
	return (
		<div>{props.theme}</div>
	)
}

function Toolbar(props) {
	// The Toolbar component must take an extra "theme" prop  
	// and pass it to the ThemedButton. This can become painful  
	// if every single button in the app needs to know the theme  
	// because it would have to be passed through all components.  
	return (
		<div>
			<ThemedButton theme={props.theme} />    
		</div>
	)
}

class ThemedButton extends React.Component {
	render() {
		return <Button theme={this.props.theme} />;
	}
}

class Ex_1_PassProps extends React.Component {
	render() {
		return <Toolbar theme="dark" />;
	}
}

export default Ex_1_PassProps