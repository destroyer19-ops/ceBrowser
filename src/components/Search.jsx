import React from 'react'

const Search = () => {
  return (
    <div>
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
            />
            {input && (
              <button
                onClick={handleClearInput}
                className="absolute cursor-pointer right-12 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaTimes />
              </button>
            )}
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <FaMicrophone className="w-3 h-auto md:w-5 text-gray-400" size={24} />
            </button>
          </div>
        </div>
        <button className="hidden md:block bg-blue-500 text-white rounded-full py-2 px-4 ml-4">
          Search
        </button>
      </form>
      <hr />
    </div>
  )
}

export default Search