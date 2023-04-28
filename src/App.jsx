import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { TheRoutes } from './components/TheRoutes'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home  from './components/HomeScreen/index.jsx'
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen' >
                {/* <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/> */}
                <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {/* <TheRoutes/> */}
        <Footer/>
      </div>
 
    </div>
  )
}

export default App