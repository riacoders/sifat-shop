import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Shop = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row items-start justify-around gap-4">
      <div className="w-full lg:w-2/4">
        <h2 className="text-2xl font-semibold mb-6">Savatda 1 ta narsa bor</h2>

        <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg mb-6">
          
          <div className="flex items-center">
            <img
              src="https://picsum.photos/200/300"
              alt="Sarafan"
              className="w-16 h-24 object-cover rounded"
            />
            <div className="ml-4">
              <h3 className="font-medium text-lg">Sarafan</h3>
              <p className="text-sm text-gray-500">
                O'lcham: <span className="font-semibold">M</span>
              </p>
              
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-xl font-semibold border rounded-full w-8 h-8 flex items-center justify-center  hover:bg-red-500">
              -
            </button>
            <span className="font-semibold">1</span>
            <button className="text-xl font-semibold border rounded-full w-9 h-9 flex items-center justify-center hover:bg-blue-300  ">
              +
            </button>
          </div>

          
          <div className="text-lg font-semibold ml-6">349 990 so'm</div>

          
          <div className="flex  space-x-4 ml-6 ">
          <button className="text-red-400  "> < FaHeart/></button>
            <button className="text-white rounded-full  p-1 bg-blue-600"> <MdDelete/> </button>
            
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-6">
        <h2 className="text-lg font-semibold mb-4">Корзина</h2>

        <div className="mb-4">
          <p className="flex justify-between text-gray-700">
            <span>5 товаров на сумму</span>
            <span>740 980 сум</span>
          </p>
          <p className="flex justify-between text-red-500">
            <span>Скидка</span>
            <span>0 сум</span>
          </p>
          <p className="flex justify-between text-gray-700">
            <span>Доставка</span>
            <span>Бесплатно</span>
          </p>
        </div>

        <div className="mb-4">
          <p className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Итого к оплате:</span>
            <span>740 980 сум</span>
          </p>
          <p className="text-sm text-gray-500">Вы соглашаетесь с договором оферты</p>
        </div>

        <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 mb-4">
          Оформить заказ
        </button>

        <div className="text-center">
          <button className="text-indigo-500 hover:underline focus:outline-none">
            Chegirma uchun promo-kod bormi?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
