import React, { useState } from 'react'; 
import logo from '../../image/logo.png'; 
import kiyim from '../../image/kiyim.jpg'
import poyabzal from '../../image/poyabzal.jpg'
import aksessuarlar from '../../image/aksessuarlar.jpg'
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-customPurple p-4 flex items-center justify-between">
        <div className="text-white font-semibold text-2xl tracking-widest">
          <img src={logo} alt="Company Logo" className="h-8" /> 
        </div>

  
        <div 
          className="flex items-center text-white space-x-2 cursor-pointer"
          onClick={toggleMenu} 
        >
          <FiMenu /> <span className="text-lg font-medium">Katalog</span>
        </div>
        
      
        <div className="flex items-center bg-white rounded-full w-1/3 px-7 py-2">
          <input 
            type="text" 
            className="flex-grow focus:outline-none px-2 text-gray-700 text-sm" 
            placeholder="Search..." 
          />
          <IoSearch className="text-sm" />
        </div>

        <div className="flex items-center space-x-4 text-white">
          <a href="#" className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Login
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Sign Up
            </button>
          </a>
          <div className="flex space-x-4">
            <FaRegHeart className="text-2xl" />
            <BsCart2 className="text-2xl" />
          </div>
          <div className="flex items-center">
            <select className="text-gray-700">
              <option value="ru">Рус</option>
              <option value="uz">O'zbek</option>
              <option value="en">English</option>
            </select>
          </div>
          <a href="#" className="flex items-center space-x-1">
            <select className="text-gray-700">
              <option value="ru">USD ($)</option>
              <option value="uz">UZS (sum)</option>
            </select>
          </a>
        </div>
      </nav>

      {isMenuOpen && (
            <div className="container  px-4  mx-40 py-8 w-4/5 ">
              <div className="flex space-x-8">
                {/* Menyu qismi */}
                 <div className="bg-white shadow-lg rounded-lg p-5 w-1/4">
                 <h4 style={{ fontFamily: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif' }} className="text-slate-500 uppercase">Toifalar</h4>
                  <ul className="text-gray-700 overflow-y-auto max-h-[30rem]">
                    <li className="py-2 border-b"><a href="/Barcha toifalar">Barcha toifalar</a></li>
                    <li className="py-2 border-b"><a href="/women">Ayollar uchun</a></li>
                    <li className="py-2 border-b"><a href="/men">Erkaklar uchun</a></li>
                    <li className="py-2 border-b"><a href="/children">Bolalar uchun</a></li>
                    <li className="py-2 border-b"><a href="/toys">O'yinchoqlar</a></li>
                    <li className="py-2 border-b"><a href="/beauty">Go'zallik va parvarish</a></li>
                    <li className="py-2 border-b"><a href="/electronics">Kanstovarlar</a></li>
                    <li className="py-2 border-b"><a href="/books">Kitoblar</a></li>
                    <li className="py-2 border-b"><a href="/elektronika">Elektronika</a></li>
                    <li className="py-2 border-b"><a href="/uy">Uy</a></li>
                    <li className="py-2 border-b"><a href="/Sport va dam olish">Sport va dam olish</a></li>
                    <li className="py-2 border-b"><a href="/oziq-ovqat">Oziq-ovqat</a></li>
                    <li className="py-2 border-b"><a href="/avto-tovarlar">Avto tovarlar</a></li>
                    <li className="py-2 border-b"><a href="/Uy hayvonlari uchun materiallar">Uy hayvonlari uchun materiallar</a></li>
                    <li className="py-2 border-b"><a href="/podarki">Sovg'a to'plamlari va qadoqlash</a></li>
                    <li className="py-2 border-b"><a href="/Gullar o'simliklar">Gullar o'simliklar</a></li>
                    <li className="py-2 border-b"><a href="/brendlar">Brendlar</a></li>
                    <li className="py-2 border-b"><a href="/chegirma tovarlar">Chegirma tovarlar</a></li>
                  </ul>
                </div>
        
    <div className="w-3/4 max-h-[32rem] overflow-y-auto">
  <h3 className="text-2xl font-bold mb-8">Ayollar uchun</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Kiyimlar */}
    <div className="text-center">
      <img
        src={kiyim}
        alt="Kiyimlar"
        className="mx-auto mb-4 w-32 h-32 object-cover"
      />
      <h4 className="font-bold text-lg mb-4">Kiyimlar</h4>
      <ul className="text-left space-y-2">
      <li><a href="/Ko'ylaklar"  className="hover:text-blue-500">Ko'ylaklar</a></li>
        <li><a href="/Shimlar va jinsilar" className="hover:text-blue-500">Shimlar va jinsilar (892)</a></li>
        <li><a href="/ichki kiyimlar" className="hover:text-blue-500"> Ichki kiyimlar (951)</a></li>
        <li><a href="/Боди" className="hover:text-blue-500">Боди (6)</a> </li>
        <li> <a href="/Bluzkalar va tunikalar"  className="hover:text-blue-500">Bluzkalar va tunikalar (633)</a></li>
        <li> <a href="/Futbolkalar va toplar"  className="hover:text-blue-500">Futbolkalar va toplar (599)</a></li>
        <li><a href="/Ustki kiyimlar"  className="hover:text-blue-500">Ustki kiyimi (286)</a></li>
        <li><a href="/Kardiganlar"  className="hover:text-blue-500">Kardiganlar va sviterlar (345)</a></li>
        <li><a href="/svishotlar"  className="hover:text-blue-500">Xudi va svitshotlar (71)</a></li>
        <li><a href="/yubkalar va shortlarlar"  className="hover:text-blue-500">Yubkalar va shortalar (197)</a></li>
      </ul>
    </div>

    {/* Poyabzal */}
    <div className="text-center">
      <img
        src={poyabzal}
        alt="Poyabzal"
        className="mx-auto mb-4 w-32 h-32 object-cover"
      />
      <h4 className="font-bold text-lg mb-4">Poyabzal</h4>
      <ul className="text-left space-y-2">
        <li><a href="/Tuflilar"  className="hover:text-blue-500">Tuflilar (574)</a></li>
        <li><a href="/Krossovkalar"  className="hover:text-blue-500">Krossovkalar (187)</a></li>
        <li><a href="/Bosonojkalar"  className="hover:text-blue-500">Bosonojkalar (269)</a></li>
        <li><a href="/Shippaklar"  className="hover:text-blue-500">Shippaklar (160)</a></li>
        <li><a href="/Sandallar"  className="hover:text-blue-500">Sandallar (62)</a></li>
        <li><a href="/Mokasinlar"  className="hover:text-blue-500">Mokasinlar (90)</a></li>
        <li><a href="/Baletkalar"  className="hover:text-blue-500">Baletkalar (47)</a></li>
        <li><a href="/Домашние тапочки"  className="hover:text-blue-500">Домашние тапочки (26)</a></li>
        <li><a href="/Kedalar"  className="hover:text-blue-500">Kedalar (75)</a></li>
        <li><a href="/Botinkalar"  className="hover:text-blue-500">Botinkalar (296)</a></li>
      </ul>
    </div>

    <div className="text-center">
      <img
        src={aksessuarlar}
        alt="Aksessuarlar"
        className="mx-auto mb-4 w-32 h-32 object-cover"
      />
      <p className="font- text-lg mb-4">Aksessuarlar</p> 
      <ul className="text-left space-y-2">
        <li><a href="/Sumkalar"  className="hover:text-blue-500">Sumkalar (780)</a></li>
        <li><a href="/Расчески"  className="hover:text-blue-500">Расчески (3)</a></li>
        <li><a href="/Soatlar"  className="hover:text-blue-500">Soatlar (8)</a></li>
        <li><a href="/Ryukzaklar"  className="hover:text-blue-500">Ryukzaklar (27)</a></li>
        <li><a href="/Klatchlar"  className="hover:text-blue-500">Klatchlar (25)</a></li>
        <li><a href="/Hamyonlar"  className="hover:text-blue-500">Hamyonlar (55)</a></li>
        <li><a href="/Bosh kiyimlari"  className="hover:text-blue-500">Bosh kiyimlari (27)</a></li>
        <li><a href="/Taqinchoqlar"  className="hover:text-blue-500">Taqinchoqlar (86)</a></li>
        <li><a href="/Bijuteriya"  className="hover:text-blue-500">Bijuteriya (81)</a></li>
        <li><a href="/Qo'lqoplar"  className="hover:text-blue-500">Qo'lqoplar (17)</a></li>
      </ul>
    </div>
  </div>
</div>
              </div>
            </div>
      )}
      
    
    </div>
  );
};

export default Navbar;
