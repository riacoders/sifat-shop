import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Product from './Components/Product/Product'
import Navbar from './Components/Navbar'
import Paynet from './Components/Card/Paynet'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/likes' element={<Product />} />
				<Route path='/paynet' element={<Paynet/>} />
			</Routes>
		</div>
	)
}

export default App
