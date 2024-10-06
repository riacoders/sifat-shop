import { IoSearch } from 'react-icons/io5'
import Banner from '../components/banner'
import CategoryCards from '../components/category-cards'
import CategoryProducts from '../components/category-products'
import ProductCards from '../components/product-cards'

function Homepage() {
	return (
		<div className='flex flex-col max-w-7xl m-auto gap-6 p-3 md:mt-20  md:p-0 mb-20 md:mb-0'>
			<div className='flex md:hidden'>
				<div className='flex items-center bg-gray-100 rounded-full w-full  p-1'>
					<input
						type='text'
						className='flex-grow focus:outline-none px-2 text-gray-700 text-sm bg-transparent p-2'
						placeholder='Search...'
					/>
					<IoSearch className='text-xl cursor-pointer bg-blue-600  text-white rounded-full w-9 h-9 p-[7px]' />
				</div>
			</div>
			<Banner />
			<CategoryCards
				title={'Chegirmalar'}
				product1={'Ayollar kiyimlari'}
				product2={'Uy uchun tovarlar'}
				product3={'Bolalar kiyimlari'}
				product4={'Erkaklar kiyimlari'}
			/>
			<ProductCards title={'Yangi mahsulotlar'} />
			<CategoryProducts />
			<CategoryCards
				title={'Ayollar uchun'}
				product1={'Ayollar kiyimlari'}
				product2={"Ko'ylaklar"}
				product3={'Qishki kiyimlari'}
				product4={'Kuzgi kiyimlari'}
			/>
			<ProductCards title={'Ayollar uchun kiyimlar'} />
			<CategoryProducts />
			<CategoryCards
				title={'Erkaklar uchun'}
				product1={'Erkaklar kiyimlari'}
				product2={"Ko'ylaklar"}
				product3={'Qishki kiyimlari'}
				product4={'Kuzgi kiyimlari'}
			/>
			<ProductCards title={'Erkaklar uchun kiyimlar'} />
			<CategoryProducts />
			<CategoryCards
				title={'Bolalar uchun'}
				product1={'Bolalar kiyimlari'}
				product2={"Ko'ylaklar"}
				product3={'Qishki kiyimlari'}
				product4={'Kuzgi kiyimlari'}
			/>
			<ProductCards title={'Bolalar uchun kiyimlar'} />
			<CategoryProducts />
		</div>
	)
}

export default Homepage
