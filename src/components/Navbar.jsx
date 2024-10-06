import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsCart2 } from 'react-icons/bs'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { MdOutlineShoppingBag } from 'react-icons/md'
import { PiMagnifyingGlassBold } from 'react-icons/pi'
import logoNoText from '../assets/logo-blue.png'
import logo from '../assets/logo-with-row-text.png'
import NavCategory from './nav-category'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeTab, setActiveTab] = useState('tab1')

	const handleActiveTab = tab => {
		setActiveTab(tab)
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='w-full fixed md:top-0 bottom-0 left-0 z-10'>
			<nav className='bg-customPurple  p-2 md:block hidden'>
				<div className='max-w-7xl flex items-center justify-between  gap-4 m-auto'>
					<div className='text-white font-semibold text-2xl tracking-widest'>
						<Link to={'/'}>
							<img src={logo} alt='Company Logo' className='h-14' />
						</Link>
					</div>

					<div
						className='flex items-center text-white space-x-2 cursor-pointer'
						onClick={toggleMenu}
					>
						<FiMenu
							className='nav-icon'
							style={isMenuOpen ? { display: 'none' } : { display: 'block' }}
						/>{' '}
						<AiOutlineClose
							className='nav-icon'
							style={isMenuOpen ? { display: 'block' } : { display: 'none' }}
						/>{' '}
						<span className='text-lg font-medium'>Katalog</span>
					</div>

					<div className='flex items-center bg-white rounded-full w-1/3 px-3 py-2 '>
						<input
							type='text'
							className='flex-grow focus:outline-none px-2 text-gray-700 text-sm '
							placeholder='Search...'
						/>
						<IoSearch className='text-xl cursor-pointer' />
					</div>

					<div className='flex items-center space-x-4 text-white'>
						<a href='#' className='flex items-center space-x-2'>
							<button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:transition-all duration-500 focus:outline-none cursor-pointer'>
								Login
							</button>
							<Link
								to={'/register'}
								className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:transition-all duration-500 focus:outline-none cursor-pointer '
							>
								Sign Up
							</Link>
						</a>
						<div className='flex space-x-4'>
							<Link to={'/likes'}>
								<FaRegHeart className='text-2xl cursor-pointer' />
							</Link>
							<Link to={'/cart'}>
								<BsCart2 className='text-2xl cursor-pointer' />
							</Link>
						</div>
						<div className='flex items-center gap-3'>
							<span className='cursor-pointer'>UZ</span>
							<span className='text-slate-400 cursor-pointer'>ЎЗ</span>
							<span className='text-slate-400 cursor-pointer'>РУ</span>
							<span className='text-slate-400 cursor-pointer'>EN</span>
						</div>
					</div>
				</div>
			</nav>

			{/* for mobile */}
			<nav className='bg-white  p-4 block md:hidden'>
				<ul className='list-none flex items-center justify-between gap-4'>
					<li
						className='flex flex-col items-center'
						onClick={() => handleActiveTab('tab1')}
					>
						<Link
							to='/'
							className={` ${
								activeTab === 'tab1' ? 'text-blue-600' : 'text-black'
							}  text-[12px] flex flex-col items-center gap-1 `}
						>
							<img className='w-[25px]' src={logoNoText} alt='l' /> Bosh sahifa
						</Link>
					</li>
					<li
						className='flex flex-col items-center'
						onClick={() => handleActiveTab('tab2')}
					>
						<Link
							to='/category'
							className={` ${
								activeTab === 'tab2' ? 'text-blue-600' : 'text-black'
							}  text-[12px] flex flex-col items-center gap-1 `}
						>
							<PiMagnifyingGlassBold className='text-2xl' />
							Katalog
						</Link>
					</li>
					<li
						className='flex flex-col items-center'
						onClick={() => handleActiveTab('tab3')}
					>
						<Link
							to='/cart'
							className={`${
								activeTab === 'tab3' ? 'text-blue-600' : 'text-black'
							}  text-[12px] flex flex-col items-center gap-1 `}
						>
							<MdOutlineShoppingBag className='text-2xl' />
							Savat
						</Link>
					</li>
					<li
						className='flex flex-col items-center'
						onClick={() => handleActiveTab('tab4')}
					>
						<Link
							to='/likes'
							className={` ${
								activeTab === 'tab4' ? 'text-blue-600' : 'text-black'
							}  text-[12px] flex flex-col items-center gap-1 `}
						>
							<FaRegHeart className='text-xl' />
							Sevimli
						</Link>
					</li>
					<li
						className='flex flex-col items-center'
						onClick={() => handleActiveTab('tab5')}
					>
						<a
							href='#'
							className={` ${
								activeTab === 'tab5' ? 'text-blue-600' : 'text-black'
							}  text-[12px] flex flex-col items-center gap-1 `}
						>
							<FaRegUser className='text-xl' />
							Profil
						</a>
					</li>
				</ul>
			</nav>

			{isMenuOpen && <NavCategory />}
		</div>
	)
}

export default Navbar
