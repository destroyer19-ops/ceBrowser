import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes, FaMicrophoneAlt, FaSearch } from 'react-icons/fa';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleClearInput = () => {
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?${input}`);
  };

  return (
    <div className="bg-white p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center space-x-5 w-full">
        <Link to="/">
          <p className="text-2xl font-bold text-blue py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            Ce<span className="text-blue-500">Browse</span>
          </p>
        </Link>
        <form onSubmit={handleSearch} className="flex items-center justify-center w-full max-w-lg">
          <div className="relative w-full max-w-lg">
            <div className="flex items-center">
              <input
                className="border-2 border-gray-400 text-black rounded-full py-2 px-4 w-full pl-10 pr-12"
                type="text"
                placeholder="Search"
                autoFocus
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyPress}
                onKeyPress={handleKeyPress}
              />
              {input && (
                <button
                  onClick={handleClearInput}
                  className="absolute cursor-pointer right-12 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <FaTimes />
                </button>
              )}
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <FaMicrophoneAlt className="w-3 h-auto md:w-5 text-gray-400" size={24} />
              </button>
            </div>
          </div>
        </form>
        {/* <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
            {darkTheme ? 'Light' : 'Dark'}
        </button> */}
      </div>
      <div className="w-full max-w-screen-lg mx-auto px-5 py-3">
        <nav className="flex flex-wrap justify-center items-center">
          <div className="mx-4 my-2 text-gray-500 hover:text-gray-900">
            <Link to="/all">All</Link>
          </div>
          <div className="mx-4 my-2 text-gray-500 hover:text-gray-900">
            <Link to="/news">News</Link>
          </div>
          <div className="mx-4 my-2 text-gray-500 hover:text-gray-900">
            <Link to="/images">Images</Link>
          </div>
          <div className="mx-4 my-2 text-gray-500 hover:text-gray-900">
            <Link to="/videos">Videos</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
