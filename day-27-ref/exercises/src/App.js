// src/App.js
import React, { useState, useRef } from 'react'
import './styles.css'

const startingNum = 20;

// Hexadecimal color generator
const hexaColor = () => {
	let str = '0123456789abcdef'
	let color = ''
	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * str.length)
		color += str[index]
	}
	return '#' + color
}

const generateColors = (n) => {
	const colors = []
	for (let i = 0; i < n; i++) {
		colors.push(hexaColor())
	}
	return colors
}

const Color = ({color}) => {
	const [copied, setCopied] = useState(false)
  	const ref = useRef(null)
	const copyResult = () => {
		const content = ref.current.textContent
		navigator.clipboard.writeText(content)
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 3000)
	}
	const status = copied ? 'copied' : 'copy'
	return(
		<div className='p-3 m-2 d-flex flex-row justify-content-between' style={{width:'160px',height:'160px', background: color}}>
			<div className='d-flex flex-column justify-content-between'>
				<p style={{color: '#fff'}} ref={ref}>{color}</p>
				<p style={{color: '#aaa'}}>{color}</p>
				<p style={{color: '#555'}}>{color}</p>
				<p style={{color: '#000'}}>{color}</p>
			</div>
			<div className='d-flex flex-column justify-content-end'>
				<span className={`wrapper__copy ${status} d-inline-block py-1 px-2`}>
					<i 
						className='fs-5 fa-solid fa-copy cursor-pointer' 
						onClick={copyResult}
						style={{cursor: 'pointer', color: 'white'}}
						>
					</i>
				</span>
			</div>
		</div>
		
  )
}


const App = (props) => {
	const initialColors = generateColors(startingNum)
	const [theme, setTheme] = useState('darkTheme')
	const [colors, setColors] = useState(initialColors)
	const ref = useRef(null)
	
	const onClickGenerate = () => {
		let num = ref.current.value
		if(Number(num)){
			num < 101
				? setColors(generateColors(num))
				: alert("Numbers 100 or less")
		}	
		ref.current.focus()
	}
	
	const onChangeTheme = (e) => {
		setTheme(theme === 'darkTheme' ? 'lightTheme' : 'darkTheme')
	}
	
	return (
		<div className={'App ' + theme}>
			<header>
				<div className='container-lg container-fluid'>
					<div className='text-center p-2'>
						<div className='text-right d-flex flex-reverse-row align-items-center justify-content-end'>
							<div>
								<button onClick={onChangeTheme} className={"btn m-2 " + (theme === "darkTheme" ? "btn-secondary" : "btn-outline-secondary")}>Switch to {theme === 'darkTheme' ? 'Light Theme' : 'Dark Theme'}</button>
							</div>
						</div>
						<div className='p-2 m-3 text-center'>
							<h1>Hexadecimal Colors</h1>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className='container-lg container-fluid'>
					<div className='my-lg-5 my-3'>
						<div className='col-lg-6 col-sm-8 mx-auto form-group d-flex flex-row flex-wrap align-items-center'>
							<label className='m-2 form-label fs-5' htmlFor='search'>Samples</label>
							<div className='flex-fill m-2'>
								<input className='form-control form-control-lg' type="text" ref={ref} placeholder={20} />
							</div>
							<button className='text-uppercase m-2 btn btn-primary btn-lg' onClick={onClickGenerate}>Generate</button>
						</div>
					</div>
					<div className='my-lg-5 my-3 colors-wrapper d-flex flex-row flex-wrap justify-content-center'>
						{colors.map( (color, i) => 
							<Color color={color} key={i}/>
						)}
					</div>
				</div>
			</main>
		</div>
	)
}


export default App