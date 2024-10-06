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
]

const ProductCards = () => {
	return (
		<div className='flex flex-col gap-3'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold'>Yangi mahsulotlar</h2>
				<a
					href='#'
					className='text-blue-600 font-bold text-lg hover:text-blue-800 transition duration-300'
				>
					Barchasini ko'rish →
				</a>
			</div>
			<div className='flex items-center gap-5 mt-3 flex-wrap'>
				{newProducts.map((item, index) => {
					return (
						<div key={index}>
							<div className='w-full h-56 overflow-hidden rounded-2xl'>
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
