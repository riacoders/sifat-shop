import React from "react";

const Header = () => {
  return (
    <section>
      <div className="px-5">
        <div className="flex justify-between items-center my-5 px-5">
          <h2 className="text-2xl font-bold px-15">Скидки радуют</h2>
          <a
            href="#"
            className="text-blue-600 font-bold text-lg hover:text-blue-800 transition duration-300"
          >
            Смотреть все →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
