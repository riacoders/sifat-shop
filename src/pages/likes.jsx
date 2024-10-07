import { CiHeart } from 'react-icons/ci'
import { PiCoatHangerLight } from 'react-icons/pi'

const Likes = () => {
	const products = [
		{
			id: 1,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-39%',
			sizes: 'L, M, S, XL',
			imageUrl: 'https://picsum.photos/200/300',
		},
		{
			id: 2,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-39%',
			sizes: 'L, M, S, XL',
			imageUrl: 'https://picsum.photos/200/300',
		},
		{
			id: 3,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-39%',
			sizes: 'L, M, S, XL',
			imageUrl: 'https://picsum.photos/200/300',
		},
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-39%',
			sizes: 'L, M, S, XL',
			imageUrl: 'https://picsum.photos/200/300',
		},
	]
	return (
		<div className='max-w-7xl flex flex-col gap-3 m-auto p-3 md:pl-0 md:pr-0 pl-2 pr-2 md:mt-24  md:p-0 mb-20 md:mb-0 bg-white'>
			<h1 className='md:text-3xl text-lg font-semibold'>Tanlangan tovarlar</h1>
			<div className='grid md:grid-cols-5 grid-cols-2 gap-3 '>
				{products.map((item, index) => {
					return (
						<div className='flex flex-col gap-1 shadow-sm' key={index}>
							<div className='relative flex items-center justify-center p-2 overflow-hidden border-solid border-2 border-slate-300 rounded-md h-[250px]'>
								<img src={item.imageUrl} alt='img' className='w-full' />
								<span className='absolute top-0 left-2 md:w-12 md:h-12 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center z-10 font-semibold text-[12px] md:text-base'>
									{item.discount}
								</span>
								<CiHeart className='absolute bottom-2 right-2 md:text-4xl text-3xl text-white cursor-pointer hover:text-red-500 bg-blue-600 p-1 rounded-full' />{' '}
								{/* Icon positioned at the bottom */}
							</div>
							<div className='flex flex-col md:gap-2 gap-1 p-2'>
								<p className='text-sm md:text-base'>{item.title}</p>
								<span className='text-sm md:text-base'>{item.price}</span>
								<span className='text-gray-500 text-sm md:text-base'>
									<del>{item.originalPrice}</del>
								</span>
								<p className='flex gap-2 items-center text-sm md:text-base'>
									<PiCoatHangerLight />
									{item.sizes}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Likes
