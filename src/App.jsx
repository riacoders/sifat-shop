import { Route, Routes } from 'react-router-dom'
import CardItem from './components/CardItem'
import Cards from './components/Cards'
import Contact from './components/Contact'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Cart from './pages/cart'
import CheckOut from './pages/checkout'
import Homepage from './pages/homepage'
import Likes from './pages/likes'
import NotFound from './pages/NotFound'
import Register from './pages/register'
function App() {
	return (
		<div className='relative'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/likes' element={<Likes />} />
				<Route path='/checkout' element={<CheckOut />} />
				<Route path='/register' element={<Register />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/cards' element={<Cards />} />
				<Route path='/carditem' element={<CardItem />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
