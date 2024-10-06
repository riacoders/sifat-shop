const CategoryProducts = () => {
	return (
		<div className='flex flex-col gap-3 '>
			<div className='flex justify-between items-center'>
				<p className='md:text-2xl text-md font-bold '>Bolalar uchun</p>
				<a
					href='#'
					className='text-blue-600 font-bold md:text-lg text-sm hover:text-blue-800 transition duration-300'
				>
					Hammasi →
				</a>
			</div>
			<div className='flex flex-wrap justify-start gap-5'>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=1'
						alt='For kids'
						className='md:w-[70px] md:h-[70px] w-10 h-10 object-cover rounded-[7px]'
					/>
					<p className='md:text-lg text-[12px] font-medium'>
						Yumshoq o'yinchoqlar
					</p>
				</div>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=2'
						alt='For kids'
						className='md:w-[70px] md:h-[70px] w-10 h-10 object-cover rounded-[7px]'
					/>
					<p className='md:text-lg text-[12px] font-medium'>
						O'yinchoq Transport
					</p>
				</div>
				<div className='bg-gray-100 flex items-center space-x-2 p-2 rounded-[10px]'>
					<img
						src='https://picsum.photos/100/100?random=3'
						alt='For kids'
						className='md:w-[70px] md:h-[70px] w-10 h-10 object-cover rounded-[7px]'
					/>
					<p className='md:text-lg text-[10px] font-medium'>Rivojlanish</p>
				</div>
			</div>
		</div>
	)
}

export default CategoryProducts
