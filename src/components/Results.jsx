import React from 'react'
import { Typography } from '@mui/material'

export const Results = ({ data = {} }) => {
  return (
    <div className="py-2 sm:px-6 lg:px-8">
      <Typography
        variant='p'
        component='p'
        sx={{
          whiteSpace: "nowrap",
          fontFamily: "Aileron, arial, sans-serif",
          paddingTop: "8px",
          fontSize: "0.875rem",
          color: "#bdc1c6",

        }}>
        About {data?.searchInformation?.formattedTotalResults} results{" "}
        {data?.searchInformation?.searchTime} seconds
      </Typography>
      {
        data?.items?.map((item) => {
          <div key={item?.cacheId}>
            <div>
              <div href={item?.link}>
                {item?.pagemap?.cse_image?.length > 0 &&
                  item?.pagemap?.cse_image[0]?.src && (
                    <img src={item?.pagemap?.cse_image[0]?.src} alt='thumbnail' />
                  )}
                <Typography
                  variant='p'
                  comment='p'
                  sx={{
                    color: '#bdc1c6',
                    fontWeight: "400",
                    fontSize: "0.875rem",
                  }}>
                  {item?.displayLink}
                </Typography>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}
