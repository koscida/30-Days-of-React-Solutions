// Ex_StyledComponents.js
import React from 'react'
import styled from 'styled-components'


// npm install styled-components

const Title = styled.h1`
	font-size: 70px;
	font-weight: 300;
`
const Header = styled.header`
	background-color: #61dbfb;
	padding: 25;
	padding: 10px;
	margin: 0;
`

class Ex_StyledComponents extends React.Component {
	
	render() {
		return (
			<Header>
				<div>
					<Title>30 Days Of React</Title>
					<h2>Getting Started React</h2>
					<h3>JavaScript Library</h3>
					<p>Instructor: Asabeneh Yetayeh</p>
					<small>Oct 15, 2020</small>
				</div>
			</Header>
		)
	}
}

export default Ex_StyledComponents