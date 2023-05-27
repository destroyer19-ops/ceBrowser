import React from 'react'
import { Navbar } from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import useSearch from './hooks/UseSearch'
// import mocks from './mocks'
import { Results } from './Results'

const SearchPage = ({ darkTheme, setDarkTheme, setQuery  }) => {
  const { search } = useLocation();
  const input = search?.split('?')[1];
  // const data = mocks;
  const {data}  = useSearch(input)
  // console.log({data})

  setQuery(input)
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      {/* <Link to='/'>
        <p>CeBrowse</p>
      </Link> */}

      {/* <script async src="https://cse.google.com/cse.js?cx=53e5c187dc2da4b73"></script>
      <div class="gcse-search"></div> */}
    
      {data && (
        <div className="">
          <Results data={data} />
        </div>
      )}
    </div>
  )
}

export default SearchPage
