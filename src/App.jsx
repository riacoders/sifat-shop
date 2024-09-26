import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Navbar from './Components/Navbar/Navbar'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Homepage />} />
			</Routes>
			<Navbar/>
			
		</div>
	)
}

export default App
