import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Логотип і кнопка меню */}
        <div className="flex items-center">
          <button className="mr-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Image
            src="/logo.png" // Логотип у папці public
            alt="Rozetka Logo"
            width={100}
            height={30}
            className="mr-3"
          />
          <button className="flex items-center bg-gray-800 px-2 py-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span className="ml-1 text-sm">Каталог</span>
          </button>
        </div>

        {/* Поле пошуку */}
        <div className="flex flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="Я шукаю..."
            className="w-full rounded-l bg-gray-700 text-sm px-3 py-2 outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r">
            Знайти
          </button>
        </div>

        {/* Іконки справа */}
        <div className="flex items-center space-x-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 19.121L7 21m0-4a3 3 0 013-3h4a3 3 0 013 3v4l1.879-1.879m-1.415-1.415A2.121 2.121 0 0119 17.586m0-3.172a2.121 2.121 0 00-.586-1.414m0 0a2.121 2.121 0 00-1.414-.586M15.414 8.586A2.121 2.121 0 0115 7.414M9 5h6m-6 2h6"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 0c2.485 0 4.5 2.015 4.5 4.5S14.485 21 12 21 7.5 18.985 7.5 16.5 9.515 12 12 12z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M6 6h12M9 9h6m-6 3h6m-6 3h6m-6 3h6"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
