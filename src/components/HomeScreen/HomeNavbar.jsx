import React, { useState } from 'react';
// import './index.css';
// import 'tailwindcss/tailwind.css';
import { FaSearch, FaTh } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import HomeScreen from './HomeScreen';

function Navbar( {darkTheme, setDarkTheme}) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  

  return (
    <>
    <nav className="bg-white fixed dark:bg-gray-900 w-full shadow-lg md:shadow-none border-b dark:border-gray-700
     border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <div className="flex items-center">
          {/* <p className="text-xl font-bold text-blue-500 mr-4">CeBrowse</p> */}
          <form className="hidden md:block">
            {/* <div className="relative w-full max-w-md">
              <input
                className="border-2 border-gray-400 rounded-full py-2 px-4 w-full pl-10"
                type="text"
                placeholder="Search Google"
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            </div> */}
          </form>
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black mr-4"
          >
            Gmail
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black mr-4"
          >
            Images
          </a>
          <FaTh className="text-gray-600 mr-4" />
          {/* <button className="bg-blue-500 text-white rounded-full py-2 px-4 ml-4 hidden md:block">
            Sign in
          </button> */}
          <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-700 dark:text-gray-900 bg-white rounded-full px-4 py-2 ml-4 md:block hover:shadow-lg'>
                {darkTheme ? '☀' : '🌙'}
            </button>
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={handleMenuClick}
        >
          {showMenu ? (
            <AiOutlineClose className="text-gray-600" />
          ) : (
            <AiOutlineMenu className="text-gray-600" />
          )}
        </button>
      </div>
      {showMenu && (
        <div className="flex flex-col items-center py-2 md:hidden">
          <a href="#" className="text-sm text-gray-700 hover:text-black mb-2">
            Gmail
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black mb-2">
            Images
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white rounded-full py-2 px-4 w-full text-center"
          >
            Sign in
          </a>
        </div>
      )}
    </nav>
    {/* <main className='flex-1'>
    <HomeScreen/>

    </main> */}
    </>
  );
}

export default Navbar;
