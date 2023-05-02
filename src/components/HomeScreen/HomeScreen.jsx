import React, { useState } from 'react'
import { FaMicrophone, FaSearch, FaTimes } from 'react-icons/fa'
import Navbar from './HomeNavbar'
import { Footer } from '../Footer'
import { useNavigate } from 'react-router-dom'
const HomeScreen = ( {darkTheme, setDarkTheme}) => {
    //input 
    const [input, setInput] = useState("");
    const handleClearInput = () => {
        setInput('');
      };
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(e);
        }
    }
    
    const navigate = useNavigate();
    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?${input}`)
    }
    return (
        <>
        <div >
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        </div>
                <div className="flex flex-col items-center justify-center h-screen px-4 md:px-8">
                

            <p className="md:text-9xl font-bold text-center text-gray-900
             dark:text-white mb-10 md:text-6xl">
                Ce<span className='text-blue-500'>Browse</span>
            </p>
            <form onSubmit={handleSearch} className="flex items-center justify-center
             w-full max-w-lg">
        <div className="relative w-full max-w-lg">
          <div className="flex items-center">
            <input
              className="border-2 border-gray-400 text-black 
              rounded-full py-2 px-4 w-full pl-10 pr-12"
              type="text"
              placeholder="Search"
              autoFocus
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyPress}

            />
            {input && (
              <button 
              onClick={handleClearInput} 
              className="absolute cursor-pointer right-12 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaTimes />
              </button>
            )}
            <FaSearch className="absolute left-3 top-1/2 
            transform -translate-y-1/2 text-gray-400" />
            <button className="absolute right-2 top-1/2 
            transform -translate-y-1/2">
              <FaMicrophone className="w-3 h-auto md:w-5 text-gray-400" size={24} />
            </button>
          </div>
        </div>
        <button className="hidden md:block bg-blue-500 text-white rounded-full py-2 px-4 ml-4">
          Search
        </button>
      </form>

            <button className="block md:hidden bg-blue-500 text-white rounded-full py-2 px-4 mt-4">
                Search
            </button>
            <p className="mt-8 text-sm text-gray-500">
                CeBrowse offered in:
                <a href="#" className="underline ml-1">
                    English
                </a>
            </p>
            <div>
          <Footer/>
        </div>

        </div>
                </>

    )
}

export default HomeScreen