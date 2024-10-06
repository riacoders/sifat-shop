import card1 from '../assets/cards/card1.jpg'
import card2 from '../assets/cards/card2.jpg'
import card3 from '../assets/cards/card3.jpg'
import card4 from '../assets/cards/card4.jpg'

const CategoryCards = ({ title, product1, product2, product3, product4 }) => {
	return (
		<div className='flex flex-col gap-3 mt-3 m-auto'>
			<div className='flex justify-between items-center '>
				<h2 className='md:text-2xl text-md font-bold '>{title}</h2>
				<a
					href='#'
					className='text-blue-600 font-bold md:text-lg text-sm hover:text-blue-800 transition duration-300'
				>
					Hammasi →
				</a>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
				<div className=' rounded-[16px] overflow-hidden relative'>
					<img src={card1} alt='Image 1' className='w-full  object-cover' />
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						{product1}
					</button>
				</div>
				<div className='rounded-[16px] overflow-hidden relative'>
					<img src={card2} alt='Image 2' className='w-full object-cover' />
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						{product2}
					</button>
				</div>

				<div className='rounded-[16px] overflow-hidden relative'>
					<img src={card3} alt='Image 3' className='w-full object-cover' />
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						{product3}
					</button>
				</div>

				<div className='rounded-[16px] overflow-hidden relative'>
					<div>
						<img src={card4} alt='Image 4' className='w-full object-cover' />
					</div>
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						{product4}
					</button>
				</div>
			</div>
		</div>
	)
}

export default CategoryCards
