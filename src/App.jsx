import { Route, Routes } from 'react-router-dom'
import Paynet from './Components/Card/Paynet'
import Navbar from './Components/Navbar'
import Product from './Components/Product/Product'
import Footer from './components/Footer'
import Homepage from './pages/homepage'
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/likes' element={<Product />} />
				<Route path='/paynet' element={<Paynet />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
