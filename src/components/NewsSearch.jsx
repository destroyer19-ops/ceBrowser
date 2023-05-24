import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import Loading from './Loading';
// import Footer from './Footer';

const NewsSearch = ({ query, darkTheme, setDarkTheme }) => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const customQuery = encodeURIComponent(query);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const fetchNews = (page) => {
    setLoading(true);
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${customQuery}&pageNumber=${page}&pageSize=20&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`;
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
        setNews(data.value);
        console.log(data);
        setTotalPages(Math.ceil(data.totalCount / 20));
        setLoading(false);
      });
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

  switch (location.pathname) {
    case '/news':
      return (
        <div classsName={`bg-${darkMode ? 'black' : 'white'} min-h-screen transition-colors duration-300`}>
          <Navbar darkMode={darkTheme} setDarkMode={setDarkTheme} />
          <div className="container mx-auto px-4 py-8">
            {/* <h1 className={`text-3xl font-bold mb-6 text-${darkMode ? 'white' : 'gray-800'}`}>News Search</h1> */}
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <Loading />
              </div>
            ) : (
              <div className="grid dark:bg-slate-800 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {news.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex flex-col bg-${darkMode ? 'slate-900' : 'white'} rounded-md shadow-md overflow-hidden hover:shadow-lg transition duration-300`}
                  >
                    <div className="flex-shrink-0 aspect-w-3 aspect-h-2">
                      {item.image.url && (
                        <img src={item.image.url} alt={item.title} className="object-cover w-full h-full" />
                      )}
                    </div>
                    <div className={`p-4 flex flex-col flex-grow text-${darkMode ? 'white' : 'gray-800'}`}>
                      <div className="flex items-center mb-2">
                        {item.provider.image && (
                          <img
                            src={item.provider.image.thumbnail}
                            alt={item.provider.name}
                            className="w-8 h-8 mr-2 rounded-full"
                          />
                        )}
                        <p
                          className={`text-sm font-medium hover:underline ${
                            darkMode ? 'text-blue-300' : 'text-blue-700'
                          }`}
                        >
                          {item.provider.name}
                        </p>
                      </div>
                      <h2
                        className={`text-lg font-semibold hover:underline ${
                          darkMode ? 'text-blue-300' : 'text-blue-700'
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {getTimeSincePublished(item.datePublished)}
                      </p>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.category}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
            <div className="flex justify-center mt-6">
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
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded-md ${darkMode ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      );
    case '/videos':
      return (
        <div>
          search
        </div>
      );
  }
};

const getTimeSincePublished = (datePublished) => {
  const now = new Date();
  const publishedDate = new Date(datePublished);
  const diffTime = Math.abs(now - publishedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

  if (diffDays < 1) {
    return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
  } else {
    return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
  }
};

export default NewsSearch;
