import Image from "next/image";
import React from "react";

import { FiMenu, FiUser, FiShoppingCart } from "react-icons/fi";
import { CiGrid41 } from "react-icons/ci";
import { BiMicrophone } from "react-icons/bi";
import { HiOutlineScale } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Ліва частина: меню, логотип, каталог */}
        <div className="flex items-center space-x-4">
          {/* Меню */}
          <button className="p-2 rounded-md hover:bg-gray-800">
            <FiMenu className="h-6 w-6" />
          </button>
          {/* Логотип */}
          <button className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Rozetka Logo"
              width={200}
              height={150}
              className="object-contain cursor-pointer"
            />
          </button>
          {/* Каталог */}
          <button className="flex items-center space-x-2 px-3 py-2 border border-white rounded hover:bg-gray-800">
            <CiGrid41 className="h-6 w-6" />
            <span className="text-sm font-medium">Каталог</span>
          </button>
        </div>

        {/* Середина: поле пошуку */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-lg">
          <input
            type="text"
            placeholder="Я шукаю..."
            className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 outline-none"
          />
          <button className="p-3 hover:bg-gray-100">
            <BiMicrophone className="h-6 w-6 text-black hover:text-red-500 transition" />
          </button>
          <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition">
            Знайти
          </button>
        </div>

        {/* Права частина: мова, іконки */}
        <div className="flex items-center space-x-10">
          {/* Вибір мови */}
          <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
            <span className="text-sm font-medium">UA</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {/* Іконки */}
          <button className="p-3 rounded-md hover:bg-gray-800">
            <FiUser className="h-6 w-6" /> {/* Збільшено розмір іконок */}
          </button>
          <button className="p-3 rounded-md hover:bg-gray-800">
            <HiOutlineScale className="h-6 w-6" /> {/* Збільшено розмір */}
          </button>
          <button className="p-3 rounded-md hover:bg-gray-800">
            <FiShoppingCart className="h-6 w-6" /> {/* Збільшено розмір */}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
