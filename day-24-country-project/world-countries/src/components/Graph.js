import React from 'react'

const Graph = (props) => {
		return <div className="graph">
				{props.data.map( ([key, value]) => {
					const width = (value / props.max * 100 ) + "%"
					return (<div className='graphRow row align-items-center' key={key}>
						<div className='barLabel col-2'>{key}</div>
						<div className='barWrapper col-8'><div className='bar' style={{width: width}}></div></div>
						<div className='barValue col-2'>{value.toLocaleString("en-US")}</div>
					</div>)
				})}
			</div>
}

export default Graph;