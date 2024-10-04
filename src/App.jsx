import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage'
import Product from './Components/Product/Product'
import Navbar from './Components/Navbar'
import Paynet from './Components/Card/Paynet'
import Card from './components/Card'
import Header from './components/Header'
import Content from './components/Content'
import Ekonika from './components/Ekonika'
import Head from './components/Head'
import Ekonikas from './components/Ekonikas'
import KidsItems from './components/KidsItems'
import KidsProducts from './components/KidsProducts'
import Footer from './components/Footer'
function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/likes' element={<Product />} />
				<Route path='/paynet' element={<Paynet/>} />
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
