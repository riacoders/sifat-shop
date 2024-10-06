import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiMessage3Line } from "react-icons/ri";
import app_store from "../assets/footer/app_store.png";
import play_market from "../assets/footer/play_market.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#E2E2F8] py-8 text-gray-700">
      <div className="container px-5">
        <div className="flex gap-5">
          <div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="space-y-2 max-w-52">
                <p className="mb-3">Savollar bormi? Qoʻngʻiroq qiling:</p>
                <Link className="font-bold">+998 78 150 55 57</Link>
                <p>Ish vaqti: 09:00–21:00, dam olish kunlarisiz.</p>
                <p className="font-bold">Pochta: support@bulavka.uz</p>
              </div>
              <div className="max-w-52">
                <p>Kompaniya haqida</p>
                <p className="font-bold">Biz haqimizda</p>
                <p className="font-bold">Kontaktlar</p>
                <p className="font-bold">Ommaviy oferta</p>
                <p className="font-bold">Sheriklarga</p>
              </div>
              <div className="max-w-52">
                <p>Yordam</p>
                <p className="font-bold">Buyurtma qanday rasmiylashtiriladi</p>
                <p className="font-bold">Yetkazib berish sharti</p>
                <p className="font-bold">Toʻlov</p>
                <p className="font-bold">Qaytarish shartlari</p>
                <p className="font-bold">Oʻlchab koʻrish xizmati</p>
                <p className="font-bold">Obuna</p>
                <p className="font-bold">Obunani bekor qilish</p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-[20px] mb-3">Doim siz uchun:</h4>
              <ul>
                <li>har kuni - 50% gacha chegirmalar;</li>
                <li>Toshkentda 10 tagacha tovarni bepul oʻlchab koʻrish;</li>
                <li>katalogda 2 000 dan ziyod brend;</li>
                <li>toʻlov tizimlari oqali toʻlash (mintaqalar uchun):</li>
              </ul>
            </div>
            <div>
              <p>© 2016—2024 ООО «Bulavka Biznes»</p>
            </div>
          </div>
          <div className="ms-auto">
            <div>
              <h4 className="font-bold text-[18px] mb-4">
                Aksiyalar, chegirmalar va yangi tovarlarni kuzatib boring:
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <FaTelegramPlane className="text-[30px]" />
                <FaFacebookF className="text-[30px]" />
                <FaInstagram className="text-[30px]" />
                <FaYoutube className="text-[30px]" />
              </div>
              <div>
                <p className="font-bold text-[20px] mb-5">
                  Установите приложение:
                </p>
                <div className="flex gap-4 mb-6">
                  <img
                    src={play_market}
                    alt=""
                    className="bg-transparent w-52 cursor-pointer object-contain"
                  />
                  <img
                    src={app_store}
                    alt=""
                    className="bg-transparent w-44 cursor-pointer object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[20px] mb-3">
                    Nega xaridorlar «Bulavka»ni tanlaydilar
                  </h4>
                  <p className="max-w-[453px] mb-4">
                    Kiyim-kechak, poyabzal, oʻyinchoqlar va aksessuarlarning
                    keng va istalgan paytda buyurtirishga hozir tanlovi. Barcha
                    tovarlar omborlarimizda mavjud va oʻzbekistonning istalgan
                    shahriga yetkazib beriladi.
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-[#333] text-white rounded-[35px] p-[8px_24px] font-semibold">
                      <FaPhoneAlt />
                      Bog'lanish
                    </button>
                    <button className="flex items-center gap-2 bg-[#333] text-white rounded-[35px] p-[8px_24px] font-semibold">
                      <RiMessage3Line />
                      Xabar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
