import { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { GrNext, GrPrevious } from 'react-icons/gr'

const handleDragStart = e => e.preventDefault()

const items = [
	<img
		className='w-[98%] m-auto mr-5 md:h-[400px] h-[200px] rounded-3xl'
		src='https://picsum.photos/1000/300'
		onDragStart={handleDragStart}
		role='presentation'
		key={1}
	/>,
	<img
		className='w-[98%] m-auto mr-5 md:h-[400px] h-[200px] rounded-3xl'
		src='https://picsum.photos/1000/300'
		onDragStart={handleDragStart}
		role='presentation'
		key={2}
	/>,
	<img
		className='w-[98%] m-auto mr-5 md:h-[400px] h-[200px] rounded-3xl'
		src='https://picsum.photos/1000/300'
		onDragStart={handleDragStart}
		role='presentation'
		key={3}
	/>,
]

function Banner() {
	const carouselRef = useRef(null)
	return (
		<div className='w-full flex items-center justify-center mt-5 gap-4 rounded-3xl '>
			<AliceCarousel
				ref={carouselRef}
				mouseTracking
				items={items}
				disableDotsControls
				autoPlay
				animationDuration={2000}
				infinite
				disableButtonsControls
			/>
			<div className='flex items-center justify-between absolute md:top-[300px] top-[100px] max-w-7xl w-full pr-8 pl-8 '>
				<span className='hidden md:block'>
					<span className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-500 cursor-pointer '>
						<GrPrevious onClick={() => carouselRef.current.slidePrev()} />
					</span>
				</span>
				<span className='hidden md:block'>
					<span className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-500 cursor-pointer '>
						<GrNext onClick={() => carouselRef.current.slideNext()} />
					</span>
				</span>
			</div>
		</div>
	)
}

export default Banner
