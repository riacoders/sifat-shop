

import React from 'react';

const Ekonika = () => {
  return (
 
    <div className='flex flex-row items-center gap-2'>

    <div className="bg-blue-800 p-6 rounded-lg w-1/2 flex justify-between items-center">
      <div className="text-white w-1/2">
        <h1 className="text-7xl font-bold mb-4">ekonika</h1>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Выбрать и купить
        </button>
      </div>

      <div className="w-1/2">
        <img src="https://picsum.photos/400/350?random=1" alt="Boots" className="h-48 object-cover mx-auto" />
      </div>
    </div>
    </div>
 
  );
};

export default Ekonika;

