import { Route, Routes } from 'react-router-dom'
import Paynet from './Components/Card/Paynet'
import Navbar from './Components/Navbar'
import Product from './Components/Product/Product'
import Card from './components/Card'
import Content from './components/Content'
import Ekonika from './components/Ekonika'
import Ekonikas from './components/Ekonikas'
import Footer from './components/Footer'
import Head from './components/Head'
import Header from './components/Header'
import KidsItems from './components/KidsItems'
import KidsProducts from './components/KidsProducts'
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/likes' element={<Product />} />
				<Route path='/paynet' element={<Paynet />} />
			</Routes>
			<Header />
			<Card />
			<Head />
			<Content />
			<Ekonika />
			<Ekonikas />
			<KidsItems />
			<KidsProducts />
			<Footer />
		</div>
	)
}

export default App
