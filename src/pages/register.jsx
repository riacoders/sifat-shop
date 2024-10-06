const Register = () => {
	return (
		<div className='flex items-center justify-center flex-col gap-10 p-6'>
			<h1 className='text-black text-2xl font-bold'>
				Saytda ro'yxatdan o'tish
			</h1>
			<p className='text-center'>
				Buyurtmalar tarixi va mahsulot ko'rinishini saqlash, <br />
				buyurtma holatini kuzatish, manzillar kitobini boshqarish <br />
				va savatdagi narsalarni saqlash uchun ro'yxatdan o'ting!
			</p>
			<form action='' className='flex flex-col gap-4 w-full max-w-sm'>
				<input
					type='text'
					name='name'
					placeholder='Ismingizni kiriting: '
					className='border p-3 rounded'
					required
				/>
				<input
					type='email'
					name='email'
					placeholder='Emailingizni kiriting:'
					className='border p-3 rounded'
					required
				/>
				<input
					type='date'
					name='dob'
					className='border  p-3 rounded'
					required
				/>
				{/*  */}
				<div className='flex gap-4'>
					<label>
						<input type='radio' name='gender' value='female' required /> Ayol
					</label>
					<label>
						<input type='radio' name='gender' value='male' required /> Erkak
					</label>
				</div>
				<label>
					<input type='checkbox' required />
					Men shartlarni qabul qilaman
				</label>
				<button
					type='submit'
					className='bg-customPurple text-white p-3 rounded-full mt-4 '
				>
					Ro'yxatdan o'tish
				</button>
			</form>
			<br /> <br /> <br />
			{/*  */}
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
				</div>{' '}
				<br />
				<p className='text-center'>© 2016–2024 ООО «Bulavka Biznes»</p>
			</div>
		</div>
	)
}

export default Register
