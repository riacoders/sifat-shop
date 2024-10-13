import React from 'react';
import notfound from '../assets/image/notfound.jpg';

const NotFound = () => {
  const categories = [
    { title: 'Женские джинсы', image: 'https://picsum.photos/200/300' },
    { title: 'Повседневные платья', image: 'https://picsum.photos/200/301' },
    { title: 'Мужские ветровки', image: 'https://picsum.photos/200/302' },
    { title: 'Женские куртки', image: 'https://picsum.photos/200/303' },
    { title: 'Мужские пуловеры', image: 'https://picsum.photos/200/304' },
    { title: 'Книги', image: 'https://picsum.photos/200/305' },
    { title: 'Товары для дома и интерьера', image: 'https://picsum.photos/200/306' },
    { title: 'Косметика', image: 'https://picsum.photos/200/307' },
  ];

  return (
    <div>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='flex items-center justify-around gap-24'>
          <div className='w-full flex justify-center'>
            <img src={notfound} alt="Not Found" className='w-4/5 h-auto object-contain' />
          </div>

          <div>
            <h1 className='text-6xl font-bold text-gray-800'>404</h1>
            <h2 className='text-2xl font-semibold text-gray-800 mt-2'>UH OH! You're lost</h2>
            <p>
              The page you are looking for does not exist. <br />
              How you got here is a mystery. 
              But you can 
              click the button below to go back to the homepage.
            </p> 
            <br />
            <button className='cursor-pointer'>
              <a href="/" className="cursor-pointer px-4 py-2 text-white bg-customPurple rounded hover:bg-green-600 transition">
                HOME
              </a>
            </button>
          </div>
        </div>
      </div>
{/* Популярные категории start */}
      <div className='max-w-screen-lg mx-auto '>
        <h2 className="text-3xl font-bold mb-6">Популярные категории</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex  items-center justify-around  gap-4 p-4 shadow-md rounded-lg bg-white">
              <img src={category.image} alt={category.title} className="w-20 h-20  rounded-md object-contain mb-2" />
              <span className="text-center font-medium ">{category.title}</span>
            </div>
          ))}
        </div>
      </div>
      {/*  Популярные категории end*/}
      <div>
        <h1>Новинки</h1>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default NotFound;
