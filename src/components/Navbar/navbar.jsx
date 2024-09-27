import React from 'react';
import img from '../img/bulavka.jpg';
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-indigo-600 p-4 flex items-center justify-center gap-10">
                <div className="text-white font-semibold text-2xl tracking-widest">
                    <img src={img} alt="Bulavka logo" width={150} />
                </div>

                <div className="flex items-center text-white space-x-2 cursor-pointer">
                    <span className="text-lg font-medium flex items-center">
                        <IoMdMenu className="mr-1" /> Katalog
                    </span>
                </div>

                <div className="flex items-center bg-white rounded-full w-1/3 px-4 py-1">
                    <input 
                        type="text" 
                        className="flex-grow focus:outline-none px-2 text-gray-700" 
                        placeholder='Masalan: джинсы' 
                    />
                    <IoMdSearch style={{ color: '#6366f1' }} />
                </div>

                <div className="flex items-center space-x-4 text-white">
                    <a href="#" className="flex items-center space-x-1">
                        <FaRegHeart />
                    </a>
                    <a href="#" className="flex items-center space-x-1">
                        <AiOutlineShoppingCart />
                    </a>

                    <select 
                        className="uzs bg-indigo-600 text-white" 
                        onChange={(e) => window.location.href = '/registratsiya'}
                    >
                        <option value="register">Pегистрироваться</option>
                    </select>

                    <select className="uzb text-black">
                        <option value="uzb">Uzb</option>
                        <option value="rus">Rus</option>
                    </select>

                    <select className="uzs text-black">
                        <option value="uzs">UZS (сум)</option>
                        <option value="usd">USD ($)</option>
                    </select>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
