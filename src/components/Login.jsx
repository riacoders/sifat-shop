import React, { useState } from 'react'; 


function App() {
   
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h2 className="mt-4 text-lg text-center text-black">Введите номер телефона</h2>

        <p className="mt-2 text-center text-gray-600">
          Мы вышлем вам SMS с одноразовым кодом для входа.
        </p>
        <div className="mt-4 flex items-center gap-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
          <span>+998 </span>
          <input
            type="tel"
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            className="outline-none border-none"
          />
        </div>
          <button className="w-full px-4 py-2 mt-4 text-white bg-purple-300 rounded-3xl hover:bg-purple-500 focus:outline-none">
            Получить код
          </button>
      </div>
    </div>
  );
}

export default App;
