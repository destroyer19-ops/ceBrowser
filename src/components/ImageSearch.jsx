import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import Loading from './Loading';

const ImageSearch = ({ query }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const customQuery = encodeURIComponent(query);

  useEffect(() => {
    setLoading(true);
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${customQuery}&pageNumber=${currentPage}&pageSize=30&autoCorrect=true`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e450d65fffmsh46aed77e4134b5fp108749jsn17b77f26ee9c',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.value);
        setTotalPages(data.totalCount);
        setLoading(false);
      });
  }, [currentPage]);

  const isDarkTheme = false; // Set to false for light theme

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
    <>
      <Navbar  />
      <div className={`mb-0 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'}`}>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loading />
          </div>
        ) : (
          <>
            <div className={`grid ${isDarkTheme ? 'bg-dark' : 'bg-light'} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10 overflow-hidden `}>
              {images.map((item, index) => (
                <a key={index} href={item.webpageUrl}>
                  <div className={`image-card ${isDarkTheme ? 'dark' : 'bg-white'} shadow-lg rounded-lg`}>
                    <div className="image-wrapper">
                      <img src={item.url} alt='' className="image rounded-lg" />
                    </div>
                    <p className={`title mt-5 ml-3 pb-5  ${isDarkTheme ? 'text-slate-800' : 'text-gray-700'}`}>{item.title}</p>
                  </div>
                </a>
              ))}
            </div>

          </>
        )}
        <div className="flex justify-center mt-6 pb-6">
          <button
            onClick={handlePrevPage}
            className={`px-4 py-2 rounded-md ${currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white'
              }`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <p className={`mx-4 text-${darkMode ? 'white' : 'gray-800'}`}>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            className={`px-4 py-2 rounded-md ${currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white'
              }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSearch;
