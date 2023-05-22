import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

const ImageSearch = ({ query }) => {
  const [images, setImages] = useState([]);
  const customQuery = encodeURIComponent(query);
  console.log(customQuery);

  useEffect(() => {
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${customQuery}&pageNumber=1&pageSize=30&autoCorrect=true`;
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
        console.log(data);
      });
  }, []);

  const isDarkTheme = true; // Set to false for light theme

  return (
    <>
      <Navbar />
      <div className={`grid ${isDarkTheme ? 'bg-dark' : 'bg-light'} grid-cols-4 gap-4 p-10`}>
        {images.map((item, index) => (
            <a key={index} href={item.webpageUrl}>
          <div  className={`image-card ${isDarkTheme ? 'dark' : 'light'}`}>
            <div className="image-wrapper">
              <img src={item.url} alt='' className="image" />
            </div>
            <p className={`title ${isDarkTheme ? 'text-slate-800' : 'text-black'}`}>{item.title}</p>
          </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ImageSearch;
