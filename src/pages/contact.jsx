import contact from '../assets/image/contact.png'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
	return (
		<div className='flex flex-col md:flex-row justify-center items-center gap-5 h-screen px-4 md:px-0'>
			{/* Image Section */}
			<div className='image w-full md:w-1/2 lg:w-1/3'>
				<img
					src={contact}
					alt='Contact'
					className='w-full h-auto object-cover'
				/>
			</div>

			{/* Form Section */}
			<div className='shadow-lg w-full max-w-md'>
				<h3 className='text-2xl font-semibold mb-6 text-gray-800 text-center'>
					Get in touch
				</h3>
				<form className='flex flex-col gap-4'>
					{/* Name Input */}
					<div className='flex items-center bg-gray-200 rounded-full px-4 py-3'>
						<FaUser className='text-gray-500 mr-2' />
						<input
							type='text'
							placeholder='Name'
							className='bg-transparent outline-none flex-grow text-gray-600'
						/>
					</div>

					{/* Email Input */}
					<div className='flex items-center bg-gray-200 rounded-full px-4 py-3'>
						<MdEmail className='text-gray-500 mr-2' />
						<input
							type='email'
							placeholder='Email'
							className='bg-transparent outline-none flex-grow text-gray-600'
						/>
					</div>

					{/* Message Textarea */}
					<div className='flex items-start bg-gray-200 rounded-lg px-4 py-3'>
						<textarea
							name='Message'
							placeholder='Message'
							className='bg-transparent outline-none flex-grow text-gray-600 h-32 '
						/>
					</div>

					{/* Submit Button */}
					<button
						type='submit'
						className='bg-customPurple text-white py-3 px-6 rounded-full text-center w-full hover:bg-purple-600 transition-all'
					>
						Send
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
