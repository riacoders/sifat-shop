import { Route, Routes } from 'react-router-dom'
import Contact from './pages/contact'
import Footer from './components/Footer'
import Cart from './pages/cart'
import CheckOut from './pages/checkout'
import Likes from './pages/likes'
import NotFound from './pages/not-found'
import Register from './pages/register'
import Navbar from './components/Navbar'
import Login from './pages/login'
import Category from './pages/category'
import Product from './pages/product'
import HomePage from './pages/homepage'
function App() {
	return (
		<div className='relative'>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/likes' element={<Likes />} />
				<Route path='/checkout' element={<CheckOut />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/category' element={<Category />} />
				<Route path='/product' element={<Product />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
