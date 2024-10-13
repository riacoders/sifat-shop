import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Cart from './pages/cart'
import CheckOut from './pages/checkout'
import Homepage from './pages/homepage'
import Likes from './pages/likes'
import Register from './pages/register'
import Contact from './components/Contact'
import NotFound from './pages/NotFound'
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
				<Route path='/contact' element={<Contact/>}></Route>
				<Route path='/notfound' element={<NotFound/>}></Route>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
