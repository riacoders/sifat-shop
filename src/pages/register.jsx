import { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import logo from '../assets/logo_only.png'

const Register = () => {
	const [passwordVisible, setPasswordVisible] = useState(true)
	const [rePasswordVisible, setRePasswordVisible] = useState(true)

	return (
		<div className='flex items-center justify-center flex-col gap-10 p-6 mt-5'>
			<div className='w-full grid grid-cols-5 gap-10 bg-blue-400 py-5 px-10 rounded-md'>
				<div className='flex flex-col gap-3 col-span-3'>
					<img src={logo} alt='logo' className='w-20' />
					<h1 className='text-white text-4xl font-bold'>Ro'yxatdan o'tish</h1>
					<p className='text-white text-justify'>
						Buyurtmalar tarixi va mahsulot ko'rinishini saqlash, <br />
						buyurtma holatini kuzatish, manzillar kitobini boshqarish <br />
						va savatdagi narsalarni saqlash uchun ro'yxatdan o'ting!
					</p>
				</div>
				<div className='flex flex-col gap-3 bg-white p-5 rounded-md col-span-2'>
					<div className='flex flex-col gap-1'>
						<label htmlFor='name' className='text-slate-500 text-sm'>
							Ismingizni kiriting
						</label>
						<input
							type='text'
							id='name'
							placeholder='Name'
							className='p-2 bg-[#fafafa] rounded-sm border border-solid border-[#00000012] text-sm outline-none'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='email' className='text-slate-500 text-sm'>
							Emailingizni kiriting
						</label>
						<input
							type='email'
							id='email'
							placeholder='Email'
							className='p-2 bg-[#fafafa] rounded-sm border border-solid border-[#00000012] text-sm outline-none'
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='password' className='text-slate-500 text-sm'>
							Parol kiriting
						</label>
						<span className='p-2 bg-[#fafafa] rounded-sm border border-solid border-[#00000012] flex gap-3 '>
							<input
								type={passwordVisible ? 'password' : 'text'}
								id='password'
								placeholder='Parol'
								className='text-sm outline-none w-full bg-transparent'
							/>
							<LuEye
								style={
									passwordVisible ? { display: 'block' } : { display: 'none' }
								}
								size={24}
								onClick={() => setPasswordVisible(false)}
							/>
							<LuEyeOff
								style={
									passwordVisible ? { display: 'none' } : { display: 'block' }
								}
								size={24}
								onClick={() => setPasswordVisible(true)}
							/>
						</span>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='repassword' className='text-slate-500 text-sm'>
							Parolni takrorlang
						</label>
						<span className='p-2 bg-[#fafafa] rounded-sm border border-solid border-[#00000012 flex gap-3 '>
							<input
								type={rePasswordVisible ? 'password' : 'text'}
								id='repassword'
								placeholder='Parol'
								className='text-sm outline-none w-full bg-transparent'
							/>
							<LuEye
								style={
									rePasswordVisible ? { display: 'block' } : { display: 'none' }
								}
								size={24}
								onClick={() => setRePasswordVisible(false)}
							/>
							<LuEyeOff
								style={
									rePasswordVisible ? { display: 'none' } : { display: 'block' }
								}
								size={24}
								onClick={() => setRePasswordVisible(true)}
							/>
						</span>
					</div>
					<div className='flex items-center gap-1 justify-center'>
						<input type='checkbox' name='text' id='text' />
						<label htmlFor='text' className='text-slate-500 text-sm'>
							ommaviy oferta shartlarini qabul qilaman
						</label>
					</div>
					<div className='w-full flex items-center justify-center'>
						<button className='py-2 px-10 rounded-full bg-blue-700 text-white font-semibold'>
							Register
						</button>
					</div>
				</div>
			</div>
			<div className='bg-footerColor w-full h-52 flex flex-col items-center justify-center'>
				<div className='flex items-center justify-center gap-10'>
					<div>
						<p>
							Есть вопросы? Звоните: <br />
							<strong>+998 78 150 55 57</strong>
						</p>
					</div>
					<div>
						<p>
							Режим работы: 09:00–21:00, без выходных. <br />
							Почта: <a href='mailto:support@bulavka.uz'>support@bulavka.uz</a>
						</p>
					</div>
				</div>
				<p className='text-center'>© 2016–2024 ООО «Bulavka Biznes»</p>
			</div>
		</div>
	)
}

export default Register
