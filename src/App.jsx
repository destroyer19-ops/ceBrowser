import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
// import { TheRoutes } from './components/TheRoutes'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from './components/HomeScreen/index'
import { Results } from './components/Results'
// import Switch from 'react-router-dom'
import './index.css'
import SearchPage from './components/SearchPage'
import NewsSearch from './components/NewsSearch'
import ImageSearch from './components/ImageSearch'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [query, setQuery] = useState('')
  return (
    // <BrowserRouter>
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen' >
        <Routes>
          <Route path='/' element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />

          <Route exact path='/search' element={<SearchPage darkTheme={darkTheme} setDarkTheme={setDarkTheme} setQuery={setQuery}/>} />
          <Route exact path='/all' element={<SearchPage darkTheme={darkTheme} setDarkTheme={setDarkTheme} setQuery={setQuery}/>} />
          <Route exact path='/news' element={<NewsSearch darkTheme={darkTheme} setDarkTheme={setDarkTheme} query={query}/>} />
          <Route exact path='/images' element={<ImageSearch darkTheme={darkTheme} setDarkTheme={setDarkTheme} query={query}/>} />
          {/* <Route exact path='/videos' element={<ImageSearch darkTheme={darkTheme} setDarkTheme={setDarkTheme} query={query}/>} /> */}

        </Routes>
        {/* <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/> */}
        {/* <Home cc/> */}
        {/* <TheRoutes/> */}
        {/* <Footer/> */}
      </div>

    </div>
    // </BrowserRouter>
  )
}

export default App