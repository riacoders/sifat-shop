import { useState } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoShareSocialSharp } from 'react-icons/io5'
import { PiCoatHangerLight } from 'react-icons/pi'
import terra_pro from '../assets/image/terra pro.jpg'

const CardItem = () => {
	const [selectedSize, setSelectedSize] = useState(50)

	const handleSizeChange = size => {
		setSelectedSize(size)
	}

	const popular = [
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-39%',
			imageUrl: 'https://picsum.photos/200/200',
		},
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-19%',
			imageUrl: 'https://picsum.photos/200/201',
		},
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-29%',
			imageUrl: 'https://picsum.photos/200/202',
		},
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-9%',
			imageUrl: 'https://picsum.photos/200/203',
		},
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-14%',
			imageUrl: 'https://picsum.photos/200/204',
		},
		{
			id: 4,
			title: 'Женские джинсы',
			price: '199 990 сум',
			originalPrice: '329 990 сум',
			discount: '-20%',
			imageUrl: 'https://picsum.photos/200/205',
		},
	]
	const product = [
		{ title: 'Murakkab', value: '100% polyester' },
		{ title: "Og'irlik(gr)", value: '800' },
		{ title: 'Rangi', value: 'Beige' },
		{ title: 'Materialning tuzilishi', value: 'poliester' },
	]

	return (
		<div className='w-3/4 mx-auto bg-white p-6 rounded-lg shadow-lg'>
			<div className='flex items-center justify-between mb-4'>
				<h1 className='text-2xl font-bold'>Ko'ylaklar</h1>
				<button className='flex items-center text-blue-500 hover:text-blue-600'>
					<IoShareSocialSharp className='mr-2' /> Ulashish
				</button>
			</div>
			<div className='flex items-center gap-4 mb-4 justify-start'>
				<div className='flex text-yellow-400'>
					<FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
				</div>
				<span className='text-sm text-gray-600'>0 ta sharh</span>
				<div className='text-sm text-gray-600'>
					Yetkazib beruvchining omboridа
				</div>
				<div className='text-sm text-gray-600'>Артикул: 109636</div>
			</div>
			<div className='flex items-center justify-around gap-5 p-4'>
				<div>
					<img src='https://picsum.photos/400/400' alt='Product image' />
				</div>

				<div className='flex flex-col flex-grow'>
					<h2 className='text-3xl font-semibold text-gray-800'>
						$31.40 <span className='text-gray-500 line-through'>$51.80</span>
					</h2>

					<div className='mt-4'>
						<h3 className='text-lg font-medium text-gray-700 rounded'>
							Размер: {selectedSize}
						</h3>
						<div className='flex gap-3 mt-3'>
							{[54, 50, 46, 48].map(size => (
								<button
									key={size}
									className={`px-4 py-2 border ${
										size === selectedSize
											? 'bg-gray-200 border-blue-500 rounded'
											: 'border-gray-300'
									}`}
									onClick={() => handleSizeChange(size)}
								>
									{size}
								</button>
							))}
						</div>
					</div>

					<br />
					<div>
						<button className='px-6 py-3 w-64 bg-blue-500 text-white rounded-full hover:bg-blue-600'>
							Savatga qo'shish
						</button>
						<br />
						<br />
						<button className='px-2 py-3 w-64 h-15 border-solid font-sans border-blue-400 border-[2px] text-blue-900 rounded-full'>
							1 marta bosishda xarid qiling
						</button>
					</div>

					{/* Delivery Information */}
					<div className='mt-2 p-4 border border-gray-200 rounded-lg'>
						<h2 className='font-bold text-lg mb-4'>
							Yetkazib berish haqida ma'lumot
						</h2>
						<div className='flex justify-between items-start mb-4 cursor-pointer'>
							<div className='flex flex-row items-center gap-2'>
								<a href='# ' className='hover:bg-blue-400'>
									<FaLocationDot />
								</a>
								<div>
									<h3 className='font-bold'>Доставка</h3>
									<a href='#' className='text-gray-500 hover:text-blue-400'>
										Butun Toshkent shahri va butun Oʻzbekiston boʻylab
									</a>
								</div>
							</div>
						</div>
						<div className='flex justify-between items-start mb-4 cursor-pointer'>
							<div className='flex flex-row items-center gap-2'>
								<a href='# ' className='hover:bg-blue-400'>
									<PiCoatHangerLight />
								</a>
								<div>
									<h3 className='font-bold'>O'rnatish</h3>
									<a href='#' className='text-gray-500 hover:text-blue-400'>
										Toshkentda buyurtma berishda bepul jihozlash (kiyim va
										poyabzal).
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<div className='w-full '>
				<h1>Shuningdek, ushbu mahsulot bilan xarid qiling</h1>
				<div className='flex items-center justify-center gap-10'>
					{popular.length > 0 ? (
						popular.map(item => (
							<div className='flex flex-col gap-1' key={item.id}>
								<div className='relative flex   p-2 overflow-hidden rounded-md h-[150px]'>
									<img src={item.imageUrl} alt={item.title} className='' />
									<span className='absolute top-28 rounded-md  w-10 h-5  bg-orange-500 text-white flex items-center justify-center z-10 font-semibold'>
										{item.discount}
									</span>
								</div>
								<div className='flex flex-col gap-2 p-2'>
									<p>
										{' '}
										<a href='#'>{item.title}</a>
									</p>
									<span>{item.price}</span>
									<del className='text-gray-500'>{item.originalPrice}</del>
								</div>
							</div>
						))
					) : (
						<p className='text-gray-500'>Hech qanday mahsulot mavjud emas.</p>
					)}
				</div>
			</div>{' '}
			<br /> <br />
			{/*  */}
			<h1 className='text-2xl font-bold text-left'>Mahsulot tavsifi</h1> <br />
			<div className='w-full flex items-start justify-start gap-6  '>
				<div className='max-w-md  p-6   '>
					<h2 className='text-xl font-bold mb-4'>Xususiyatlari</h2>
					<table className=' w-full '>
						<tbody>
							{product.map((item, index) => (
								<tr
									key={index}
									className='border-b border-dotted  border-spacing-8 border-gray-500'
								>
									<td className='py-2  text-gray-600'>{item.title}</td>
									<td className='py-2 text-right text-gray-900'>
										{item.value}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className='m-8'>
					<h3>Tavsif</h3>
					<p>Нет описания товара</p>
					<img src={terra_pro} alt='' />
					<span className='text-blue-500 font-bold'>
						<a href='#'>Barcha brend mahsulotlari</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export default CardItem
