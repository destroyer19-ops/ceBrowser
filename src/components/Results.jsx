import React from 'react';
import { Typography } from '@mui/material';
import { Footer } from './Footer';

export const Results = ({ data = {} }) => {
  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8 mb-10 max-w-3xl mx-auto">
      <Typography
        variant='p'
        component='p'
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "0.875rem",
          color: "textSecondary",
          marginBottom: "1rem", // Add margin bottom
        }}
      >
        About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.searchTime} seconds)
      </Typography>
      {data?.items?.map((item) => (
        <div key={item?.cacheId} className="mt-6 border-b pb-4"> {/* Add border and padding bottom */}
          <a href={item?.link} className=" flex items-start">
            <div className="h-12 w-12 md:h-20 md:w-20 mr-4"> {/* Adjust image size for mobile view */}
              {item?.pagemap?.cse_image?.length > 0 &&
                item?.pagemap?.cse_image[0]?.src && (
                  <img src={item?.pagemap?.cse_image[0]?.src} alt='thumbnail' className="h-full w-full shadow-sm object-contain object-center rounded-xl " />
              )}
            </div>
            <div className="flex flex-col">
            <Typography
                variant='subtitle1'
                component='p'
                className='text-gray-600'
                sx={{
                  color: "textSecondary",
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  wordBreak: "break-word",
                  marginBottom: "0.25rem", // Add margin bottom
                }}
              >
                {item?.displayLink}
              </Typography>
              <Typography
                variant='h4'
                component='h4'
                className='text-blue-900'
                sx={{
                  color: "textPrimary",
                  fontWeight: "bold", // Use bold instead of medium
                  fontSize: "1.25rem",
                  lineHeight: "1.375rem",
                  wordBreak: "break-word",
                  marginBottom: "0.5rem", // Add margin bottom
                }}
              >
                {item?.title}
              </Typography>
 
              <Typography
                variant='body1'
                component='p'
                sx={{
                  color: "textPrimary",
                  fontWeight: "normal",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  wordBreak: "break-word",
                }}
              >
                {item?.snippet}
              </Typography>
            </div>
          </a>
        </div>
      ))}
      <Footer/>
    </div>
  );
};
