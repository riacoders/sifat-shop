import Banner from '../components/banner'
import CategoryCards from '../components/category-cards'
import CategoryProducts from '../components/category-products'
import ProductCards from '../components/product-cards'

function Homepage() {
	return (
		<div className='flex flex-col max-w-7xl m-auto gap-6'>
			<Banner />
			<CategoryCards />
			<ProductCards />
			<CategoryProducts />
		</div>
	)
}

export default Homepage
