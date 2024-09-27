import React from 'react';
import logo from '../../image/logo.png'; 
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-customPurple p-4 flex items-center justify-center gap-10">
        <div className="text-white font-semibold text-2xl tracking-widest">
           <img src={logo} alt="Company Logo" className="h-5" /> 
        </div>

        <div className="flex items-center text-white space-x-2 cursor-pointer">
        <FiMenu /> <span className="text-lg font-medium">Katalog</span>
        </div>
        
        <div className="flex items-center bg-white rounded-full w-1/3 px-7 py-2">
      <input type="text" className="flex-grow focus:outline-none px-2 text-gray-700 text-sm" placeholder="Search..." />
      <IoSearch className="text-sm"/>
      </div>

        <div className="flex items-center space-x-4 text-white">
            <a href="#" className="flex items-center space-x-1 ">
            <select className=" text-gray-700  rounded-lg">
        <option value="sign in">Kirish</option>
        <option value="sign up">Ro'yxatdan o'tish</option>
       </select>
            </a>
           <FaRegHeart/>
           <BsCart2/>
           <div className="flex items-center">
         <select className=" text-gray-700  ">
        <option value="ru">Рус</option>
        <option value="uz">O'zbek</option>
        <option value="en">English</option>
       </select>
     </div>

            <a href="#" className="flex items-center space-x-1">
                <span>UZS</span>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
        </div>
      </nav>
      <br />
    </div>
  );
};

export default Navbar;
