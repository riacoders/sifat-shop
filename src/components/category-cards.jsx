import card1 from '../assets/cards/card1.jpg'
import card2 from '../assets/cards/card2.jpg'
import card3 from '../assets/cards/card3.jpg'
import card4 from '../assets/cards/card4.jpg'

const CategoryCards = () => {
	return (
		<div className='flex flex-col gap-3 mt-3 m-auto'>
			<div className='flex justify-between items-center '>
				<h2 className='text-2xl font-bold '>Chegirmalar</h2>
				<a
					href='#'
					className='text-blue-600 font-bold text-lg hover:text-blue-800 transition duration-300'
				>
					Barchasini ko'rish →
				</a>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
				<div className=' rounded-[16px] overflow-hidden relative'>
					<img src={card1} alt='Image 1' className='w-full  object-cover' />
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						Товары для женщин
					</button>
				</div>
				<div className='rounded-[16px] overflow-hidden relative'>
					<img src={card2} alt='Image 2' className='w-full object-cover' />
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						Товары для дома
					</button>
				</div>

				<div className='rounded-[16px] overflow-hidden relative'>
					<img src={card3} alt='Image 3' className='w-full object-cover' />
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						Товары для детей
					</button>
				</div>

				<div className='rounded-[16px] overflow-hidden relative'>
					<div>
						<img src={card4} alt='Image 4' className='w-full object-cover' />
					</div>
					<button className='absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200'>
						Товары для мужчин
					</button>
				</div>
			</div>
		</div>
	)
}

export default CategoryCards
