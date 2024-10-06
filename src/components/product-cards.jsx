const newProducts = [
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
	{
		image: 'https://picsum.photos/300/501?random=1',
		title: 'Tovar',
		price: "350 000 so'm",
	},
]

const ProductCards = ({ title }) => {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<h2 className='md:text-2xl text-md font-bold '>{title}</h2>
				<a
					href='#'
					className='text-blue-600 font-bold md:text-lg text-sm hover:text-blue-800 transition duration-300'
				>
					Hammasi →
				</a>
			</div>
			<div className='flex items-center md:gap-5 gap-2 mt-3 flex-wrap'>
				{newProducts.map((item, index) => {
					return (
						<div key={index}>
							<div className='md:w-full w-[95%] h-56 overflow-hidden rounded-2xl'>
								<img
									src={item.image}
									alt='Image 1'
									className='w-40 h-auto object-cover rounded-md'
								/>
							</div>
							<h3 className='text-black font-bold'>{item.price}</h3>
							<p>{item.title}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ProductCards
