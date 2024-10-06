import { useState } from 'react'
import { MdNotificationImportant } from 'react-icons/md'

const CheckOut = () => {
	const [promoInputVisible, setPromoInputVisible] = useState(false)

	const togglePromoInput = () => {
		setPromoInputVisible(!promoInputVisible)
	}

	const products = [
		{
			id: 1,
			name: 'Освежитель воздуха Evenday Car Fairy Diffuser, персик, бергамот',
			price: '100 000 сум',
			image: 'https://picsum.photos/200/300',
			quantity: 1,
			status: 'На складе Bulavka',
			statusColor: 'green',
		},
	]

	return (
		<div className='max-w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-64 h-full p-4'>
			<div className='w-full lg:w-3/5 bg-white shadow-md rounded-md p-6'>
				<h1 className='font-bold text-2xl text-center'>
					Buyurtmani rasmiylashtirish
				</h1>

				<div className='max-w-xl mx-auto p-2 border-2 mt-4'>
					<div className='bg-gray-100 border-l-4 border-orange-400 p-4 mb-6'>
						<MdNotificationImportant className='text-orange-400 text-2xl' />
						<p className='text-sm text-orange-500'>
							В заказе есть товары находящиеся на складе поставщика, которые
							могут быть доставлены на день позже.
							<span className='font-bold text-orange-600'>
								{' '}
								Экспресс-доставка
							</span>{' '}
							с такими товарами не доступна.
						</p>
					</div>
				</div>

				<div className='w-full mx-auto bg-white shadow-md rounded-md p-6 mt-4'>
					<h2 className='text-xl font-semibold mb-4'>Адрес доставки</h2>

					<label className='block mb-2 text-sm font-medium text-gray-700'>
						Город
					</label>
					<select className='w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
						<option value='tashkent'>Ташкент</option>
						<option value='samarkand'>Самарканд</option>
						<option value='bukhara'>Бухара</option>
						<option value='namangan'>Наманган</option>
						<option value='andijan'>Андижан</option>
					</select>

					<label className='block mb-2 text-sm font-medium text-gray-700'>
						Ko'cha, uy, bino, kvartira
					</label>
					<input
						type='text'
						className='w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='Улица, дом, корпус, квартира'
					/>

					<h2 className='text-xl font-semibold mb-4'>Shaxsiy ma'lumotlari</h2>

					<label className='block mb-2 text-sm font-medium text-gray-700'>
						Ism
					</label>
					<input
						type='text'
						className='w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						value=''
						disabled
					/>

					<label className='block mb-2 text-sm font-medium text-gray-700'>
						Telefon nomer{' '}
					</label>
					<input
						type='text'
						className='w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='+998 (##) ###-##-##'
					/>

					<h2 className='text-xl font-semibold mb-4'>
						Buyurtma bo'yicha sharhlar
					</h2>

					<textarea
						className='w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
						placeholder='Ваш комментарий прочитает курьер (Код домофона или ориентир локации)'
					></textarea>

					<button className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
						Buyurtma berish
					</button>
				</div>

				<div className='max-w-2xl mx-auto bg-white shadow-md rounded-md p-6 border-solid border-2 border-red-700 mt-6'>
					<h2 className='text-xl font-semibold mb-4'>Товары в заказе</h2>
					{products.map(product => (
						<div
							key={product.id}
							className='flex items-center justify-between mb-4'
						>
							<div className='flex items-center'>
								<img
									src={product.image}
									alt={product.name}
									className='w-16 h-16 object-cover rounded-md mr-4'
								/>
								<div>
									<p className='text-sm font-medium'>
										{product.quantity} x {product.name}
									</p>
									<p
										className={`text-xs font-medium text-${product.statusColor}-500`}
									>
										{product.status}
									</p>
								</div>
							</div>
							<p className='text-sm font-medium'>{product.price}</p>
						</div>
					))}
				</div>
			</div>

			<div className='w-full lg:w-1/4 bg-white shadow-md rounded-md p-6'>
				<h2 className='text-lg font-semibold mb-4'>Корзина</h2>

				<div className='mb-4'>
					<p className='flex justify-between text-gray-700'>
						<span>5 товаров на сумму</span>
						<span>740 980 сум</span>
					</p>
					<p className='flex justify-between text-red-500'>
						<span>Скидка</span>
						<span>0 сум</span>
					</p>
					<p className='flex justify-between text-gray-700'>
						<span>Доставка</span>
						<span>Бесплатно</span>
					</p>
				</div>

				<div className='mb-4'>
					<p className='flex justify-between text-lg font-semibold text-gray-900'>
						<span>Итого к оплате:</span>
						<span>0 сум</span>
					</p>
					<p className='text-sm text-gray-500'>
						Вы соглашаетесь с договором оферты
					</p>
				</div>

				<button className='w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 mb-4'>
					Оформить заказ
				</button>

				<div className='text-center'>
					<button
						onClick={togglePromoInput}
						className='text-indigo-500 hover:underline focus:outline-none'
					>
						Chegirma uchun promo-kod bormi?
					</button>
				</div>

				{promoInputVisible && (
					<div className='mt-4'>
						<input
							type='text'
							className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
							placeholder='Введите промокод'
						/>
						<button className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 mt-2'>
							Применить
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default CheckOut
