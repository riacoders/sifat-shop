import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { PiCoatHangerLight } from 'react-icons/pi'

const Product = () => {
    const products = [
        {
            id: 1,
            title: 'Женские джинсы',
            price: '199 990 сум',
            originalPrice: '329 990 сум',
            discount: '-39%',
            sizes: 'L, M, S, XL',
            imageUrl: 'https://picsum.photos/200/300' 
        },
        {
            id: 2,
            title: 'Женские джинсы',
            price: '199 990 сум',
            originalPrice: '329 990 сум',
            discount: '-39%',
            sizes: 'L, M, S, XL',
            imageUrl: 'https://picsum.photos/200/300' 
        },
        {
            id: 3,
            title: 'Женские джинсы',
            price: '199 990 сум',
            originalPrice: '329 990 сум',
            discount: '-39%',
            sizes: 'L, M, S, XL',
            imageUrl: 'https://picsum.photos/200/300' 
        },
        {
            id: 4,
            title: 'Женские джинсы',
            price: '199 990 сум',
            originalPrice: '329 990 сум',
            discount: '-39%',
            sizes: 'L, M, S, XL',
            imageUrl: 'https://picsum.photos/200/300' 
        },
    ]
  return (
    <div className='max-w-7xl flex flex-col gap-3 m-auto p-3 pl-0 pr-0'>
      <h1 className='text-3xl'>Tanlangan tovarlar</h1>
      <div className='grid grid-cols-5 gap-3'>
        {
            products.map((item, index) => {
                return (
                    <div className='flex flex-col gap-1 shadow-sm'  key={index}>
                        <div className='relative flex items-center justify-center p-2 overflow-hidden border-solid border-2 border-slate-300 rounded-md h-[250px]'>
                            <img src={item.imageUrl} alt="img" className='w-full' />
                            <span className='absolute top-0 left-2 w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center z-10 font-semibold'>{item.discount}</span>
                            <CiHeart className='absolute bottom-2 right-2 text-4xl text-white cursor-pointer hover:text-red-500 bg-blue-600 p-1 rounded-full' /> {/* Icon positioned at the bottom */}
                        </div>
                        <div className='flex flex-col gap-2 p-2'>
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                            <span className='text-gray-500'>{item.originalPrice}</span> 
                            <p className='flex gap-2'>
                                <PiCoatHangerLight />
                                {item.sizes}
                            </p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Product
