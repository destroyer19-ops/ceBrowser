import React, { useState } from 'react';
// import './index.css';
// import 'tailwindcss/tailwind.css';
import { FaSearch, FaTh } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import HomeScreen from './HomeScreen';
// const [showMenu, setShowMenu] = useState(false);

function Navbar({ darkTheme, setDarkTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };



  return (
    <>
      <nav className="bg-white fixed dark:bg-gray-900 md:h-[7vh] z-50 w-full shadow-lg md:shadow-none border-b dark:border-gray-700
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
            <select name="" id="">
              <option value="theme" onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-700 dark:text-gray-900 bg-white rounded-full px-4 py-2 ml-4 md:block hover:shadow-lg'>
                {/* <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-700 dark:text-gray-900 bg-white rounded-full px-4 py-2 ml-4 md:block hover:shadow-lg'> */}
                {darkTheme ? '☀' : '🌙'}
                {/* </button> */}
              </option>
            </select>
            {/* <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-700 dark:text-gray-900 bg-white rounded-full px-4 py-2 ml-4 md:block hover:shadow-lg'>
                {darkTheme ? '☀' : '🌙'}
            </button> */}
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
          <div className="fixed right-0 pt-6 md:pt-12 m-auto h-screen w-1/2  bg-blue-400 dark:bg-slate-900 z-[100] transition-transform bg-opacity-90 transform translate-x-0 md:hidden">
            <div className="flex flex-col items-left ml-8 mr-8 py-2 mb-10 align-middle">
              <a href="#" 
                className="transition duration-500 ease-in-out animate-pulse text-base mb-8 hover:border-b border-slate-700 dark:border-gray-700 text-white dark:text-gray-400 hover:text-slate-600 dark:hover:text-white "              >
                Gmail
              </a>
              <a href="#" className="transition duration-500 ease-in-out animate-pulse text-base mb-8 hover:border-b border-slate-700 dark:border-gray-700 text-white dark:text-gray-400 hover:text-slate-600 dark:hover:text-white ">
                LoveWorld Apps
              </a>
              <a href="#" className="transition duration-500 ease-in-out animate-pulse text-base mb-8 hover:border-b border-slate-700 dark:border-gray-700 text-white dark:text-gray-400 hover:text-slate-600 dark:hover:text-white ">
                Images
              </a>
              <div className="relative mb-8">
                <button
                  type="button"
                  onClick={() => setDarkTheme(!darkTheme)}
                  className="transition duration-500 ease-in-out animate-pulse text-base mb-8 hover:border-b border-slate-700 dark:border-gray-700 text-white dark:text-gray-400 hover:text-slate-600 dark:hover:text-white "                >
                  <span className='text-sm'> Theme: <span className="mr-2">{darkTheme ? "☀" : "🌙"}</span></span>
                </button>
              </div>
            </div>
          </div>
        )}

      </nav>


    </>
  );
}

export default Navbar;
