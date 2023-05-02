import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
// import { TheRoutes } from './components/TheRoutes'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from './components/HomeScreen/index'
import { Results } from './components/Results'
// import Switch from 'react-router-dom'
import SearchPage from './components/SearchPage'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    // <BrowserRouter>
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen' >
        <Routes>
          <Route path='/' element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />

          <Route exact path='/search' element={<SearchPage darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />

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