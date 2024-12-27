import { Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components'
import {
	Cart,
	Category,
	CheckOut,
	Contact,
	HomePage,
	Likes,
	Login,
	NotFound,
	Product,
	Register,
} from './pages'
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
