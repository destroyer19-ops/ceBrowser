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
        }}
      >
        About {data?.searchInformation?.formattedTotalResults} results ({data?.searchInformation?.searchTime} seconds)
      </Typography>
      {data?.items?.map((item) => (
        <div key={item?.cacheId} className="mt-6">
          <a href={item?.link} className="text-blue-700 hover:underline flex items-start">
            {item?.pagemap?.cse_image?.length > 0 &&
              item?.pagemap?.cse_image[0]?.src && (
                <img src={item?.pagemap?.cse_image[0]?.src} alt='thumbnail' className="h-12 w-12 mr-4" />
            )}
            <div className="flex flex-col">
              <Typography
                variant='h4'
                component='h4'
                sx={{
                  color: "textPrimary",
                  fontWeight: "medium",
                  fontSize: "1.25rem",
                  lineHeight: "1.375rem",
                  wordBreak: "break-word",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                variant='subtitle1'
                component='p'
                sx={{
                  color: "textSecondary",
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  wordBreak: "break-word",
                }}
              >
                {item?.displayLink}
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
