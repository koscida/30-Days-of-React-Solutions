// src/App.js
import Ex_1_Input from './Ex_1_Input'
import Ex_2_Focus from './Ex_2_Focus'
import Ex_3_DOM_Content from './Ex_3_DOM_Content'
import Ex_4_Style_Element from './Ex_4_Style_Element'

const App = () => {
	return (
		<div className='App'>
			<Ex_1_Input />
			<hr/>
			<Ex_2_Focus />
			<hr/>
			<Ex_3_DOM_Content />
			<hr/>
			<Ex_4_Style_Element />
		</div>
	)
}

export default App