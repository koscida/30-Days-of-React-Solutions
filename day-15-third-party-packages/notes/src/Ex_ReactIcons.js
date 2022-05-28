// Ex_ReactIcons.js
import React from 'react'
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti'

// npm install react-icons

class Ex_ReactIcons extends React.Component {
	render() {
		return (
			<footer>
				<h3>30 Days Of React</h3>
				<div>
					<TiSocialLinkedinCircular />
					<TiSocialGithubCircular />
					<TiSocialTwitterCircular />
				</div>
				<div>
					<small> Copyright &copy; {new Date().getFullYear()} </small>
				</div>
			</footer>
		)
	}
}

export default Ex_ReactIcons