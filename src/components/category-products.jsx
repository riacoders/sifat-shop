const CategoryProducts = () => {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold '>Bolalar uchun</h2>
				<a
					href='#'
					className='text-blue-600 font-bold text-lg hover:text-blue-800 transition duration-300'
				>
					Barchasini ko'rish →
				</a>
			</div>
			<div className='flex flex-wrap justify-between gap-1'>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=1'
						alt='For kids'
						className='w-[70px] h-[70px] object-cover'
					/>
					<h2 className='text-lg font-bold'>Yumshoq o'yinchoqlar</h2>
				</div>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=2'
						alt='For kids'
						className='w-[70px] h-[70px] object-cover'
					/>
					<h2 className='text-lg font-bold'>O'yinchoq Transport</h2>
				</div>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=3'
						alt='For kids'
						className='w-[70px] h-[70px] object-cover'
					/>
					<h2 className='text-lg font-bold'>Rivojlanish</h2>
				</div>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=4'
						alt='For kids'
						className='w-[70px] h-[70px] object-cover'
					/>
					<h2 className='text-lg font-bold'>Yumshoq o'yinchoqlar</h2>
				</div>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=5'
						alt='For kids'
						className='w-[70px] h-[70px] object-cover'
					/>
					<h2 className='text-lg font-bold'>Yumshoq o'yinchoqlar</h2>
				</div>
			</div>
		</div>
	)
}

export default CategoryProducts
