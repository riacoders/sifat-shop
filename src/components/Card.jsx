import React from "react";
import card1 from "../assets/cards/card1.jpg";
import card2 from "../assets/cards/card2.jpg";
import card3 from "../assets/cards/card3.jpg";
import card4 from "../assets/cards/card4.jpg";

const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-5">
        <div className=" rounded-[16px] overflow-hidden relative">
          <img src={card1} alt="Image 1" className="w-full  object-cover" />
          <button className="absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200">
            Товары для женщин
          </button>
        </div>
        <div className="rounded-[16px] overflow-hidden relative">
          <img src={card2} alt="Image 2" className="w-full object-cover" />
          <button className="absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200">
            Товары для дома
          </button>
        </div>

        <div className="rounded-[16px] overflow-hidden relative">
          <img src={card3} alt="Image 3" className="w-full object-cover" />
          <button className="absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200">
            Товары для детей
          </button>
        </div>

        <div className="rounded-[16px] overflow-hidden relative">
          <div>
            <img src={card4} alt="Image 4" className="w-full object-cover" />
          </div>
          <button className="absolute bottom-4 left-16 bg-blue-500 text-white rounded-lg px-4 py-2 font-bold hover:bg-blue-600 transition duration-200">
            Товары для мужчин
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
