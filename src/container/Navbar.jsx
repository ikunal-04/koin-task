import koinxlogo from "../assets/koinXLogo.svg";
import React from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-row justify-between bg-white h-16 shadow-[#102649] sm:h-20 sm:flex-row">
      <div className="flex flex-col justify-center ml-4 sm:ml-16 sm:w-auto mr-72">
        <img src={koinxlogo} alt="koinxLogo" className="h-5 w-20 sm:w-[95px]" />
      </div>
      <div className="flex items-center justify-end h-full sm:w-auto sm:justify-center sm:static sm:block">
        <button
          className="block sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="flex gap-11">
        <div
            className={`${
            isOpen ? "block" : "hidden"
            } w-full sm:flex sm:flex-col sm:justify-center sm:blocksm:w-auto sm:flex-row sm:static `}
        >
            <ul className="flex flex-col p-4 mt-4 space-y-2 border rounded-lg sm:flex-row sm:space-y-0 sm:mt-0 sm:border-0 sm:p-0 sm:space-x-8 sm:text-base">
            <li className="sm:block">
                <a
                href="#home"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded sm:p-0"
                >
                Crypto Taxes
                </a>
            </li>
            <li className="sm:block">
                <a
                href="#about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded sm:p-0"
                >
                Free Tools
                </a>
            </li>
            <li className="sm:block">
                <a
                href="#services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded sm:p-0"
                >
                Resource Center
                </a>
            </li>
            </ul>
        </div>
        <div className="flex sm:flex sm:items-center justify-end h-full mr-4 sm:w-auto hidden sm:static sm:block">
            <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] p-2 h-10 w-32 text-white rounded-lg text-base sm:inline-block sm:mt-0">
            Get Started
            </button>
        </div>
      </div>
      
    </div>
)};

export default Navbar;