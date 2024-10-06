import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Product from './Components/Product/Product'
import Navbar from './Components/Navbar'
import Paynet from './Components/Card/Paynet'

import Shop from './Components/Shop'
import Register from './Components/Register'
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/likes' element={<Product />} />
				<Route path='/paynet' element={<Paynet/>} />
				<Route path='/shop' element={<Shop/>} />
				<Route path='/register' element={<Register/>}/>
			</Routes>

		</div>
	)
}

export default App
