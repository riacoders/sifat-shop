import { IoChevronForward } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import aksessuarlar from '../assets/image/aksessuarlar.jpg'
import kiyim from '../assets/image/kiyim.jpg'
import poyabzal from '../assets/image/poyabzal.jpg'
import { categories } from '../utils'

function NavCategory() {
	return (
		<div className='container px-4 py-5 m-auto h-screen bg-white sticky top-20'>
			<div className='flex space-x-8'>
				{/* Menyu qismi */}
				<div className='bg-white  rounded-lg p-5 w-1/4   scroll-container'>
					<h4
						style={{
							fontFamily:
								'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
						}}
						className='text-slate-500 uppercase'
					>
						Toifalar
					</h4>
					<ul className='text-gray-700 max-h-[30rem]'>
						{categories.map((item, index) => {
							return (
								<li className='py-2 border-b' key={index}>
									<a className=' flex items-center justify-between' href='#'>
										{item.name}

										<IoChevronForward />
									</a>
								</li>
							)
						})}
					</ul>
				</div>

				<div className='w-3/4 max-h-[35rem] scroll-container'>
					<h3 className='text-2xl font-bold mb-8'>Ayollar uchun</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{/* Kiyimlar */}
						<div className='text-center'>
							<img
								src={kiyim}
								alt='Kiyimlar'
								className='mx-auto mb-4 w-32 h-32 object-cover'
							/>
							<h4 className='font-bold text-lg mb-4'>Kiyimlar</h4>
							<ul className='text-left space-y-2'>
								<li>
									<Link
										to='/category-item'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Ko'ylaklar
									</Link>
								</li>
								<li>
									<a
										href='/Shimlar va jinsilar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Shimlar va jinsilar (892)
									</a>
								</li>
								<li>
									<a
										href='/ichki kiyimlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										{' '}
										Ichki kiyimlar (951)
									</a>
								</li>
								<li>
									<a
										href='/Боди'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Боди (6)
									</a>{' '}
								</li>
								<li>
									{' '}
									<a
										href='/Bluzkalar va tunikalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Bluzkalar va tunikalar (633)
									</a>
								</li>
								<li>
									{' '}
									<a
										href='/Futbolkalar va toplar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Futbolkalar va toplar (599)
									</a>
								</li>
								<li>
									<a
										href='/Ustki kiyimlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Ustki kiyimi (286)
									</a>
								</li>
								<li>
									<a
										href='/Kardiganlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Kardiganlar va sviterlar (345)
									</a>
								</li>
								<li>
									<a
										href='/svishotlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Xudi va svitshotlar (71)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
								<li>
									<a
										href='/yubkalar va shortlarlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Yubkalar va shortalar (197)
									</a>
								</li>
							</ul>
						</div>

						{/* Poyabzal */}
						<div className='text-center'>
							<img
								src={poyabzal}
								alt='Poyabzal'
								className='mx-auto mb-4 w-32 h-32 object-cover'
							/>
							<h4 className='font-bold text-lg mb-4'>Poyabzal</h4>
							<ul className='text-left space-y-2'>
								<li>
									<a
										href='/Tuflilar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Tuflilar (574)
									</a>
								</li>
								<li>
									<a
										href='/Krossovkalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Krossovkalar (187)
									</a>
								</li>
								<li>
									<a
										href='/Bosonojkalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Bosonojkalar (269)
									</a>
								</li>
								<li>
									<a
										href='/Shippaklar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Shippaklar (160)
									</a>
								</li>
								<li>
									<a
										href='/Sandallar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Sandallar (62)
									</a>
								</li>
								<li>
									<a
										href='/Mokasinlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Mokasinlar (90)
									</a>
								</li>
								<li>
									<a
										href='/Baletkalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Baletkalar (47)
									</a>
								</li>
								<li>
									<a
										href='/Домашние тапочки'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Домашние тапочки (26)
									</a>
								</li>
								<li>
									<a
										href='/Kedalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Kedalar (75)
									</a>
								</li>
								<li>
									<a
										href='/Botinkalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Botinkalar (296)
									</a>
								</li>
							</ul>
						</div>

						<div className='text-center'>
							<img
								src={aksessuarlar}
								alt='Aksessuarlar'
								className='mx-auto mb-4 w-32 h-32 object-cover'
							/>
							<p className='font- text-lg mb-4'>Aksessuarlar</p>
							<ul className='text-left space-y-2'>
								<li>
									<a
										href='/Sumkalar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Sumkalar (780)
									</a>
								</li>
								<li>
									<a
										href='/Расчески'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Расчески (3)
									</a>
								</li>
								<li>
									<a
										href='/Soatlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Soatlar (8)
									</a>
								</li>
								<li>
									<a
										href='/Ryukzaklar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Ryukzaklar (27)
									</a>
								</li>
								<li>
									<a
										href='/Klatchlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Klatchlar (25)
									</a>
								</li>
								<li>
									<a
										href='/Hamyonlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Hamyonlar (55)
									</a>
								</li>
								<li>
									<a
										href='/Bosh kiyimlari'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Bosh kiyimlari (27)
									</a>
								</li>
								<li>
									<a
										href='/Taqinchoqlar'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Taqinchoqlar (86)
									</a>
								</li>
								<li>
									<a
										href='/Bijuteriya'
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Bijuteriya (81)
									</a>
								</li>
								<li>
									<a
										href="/Qo'lqoplar"
										className='hover:text-blue-500 hover:transition-all duration-500'
									>
										Qo'lqoplar (17)
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavCategory
