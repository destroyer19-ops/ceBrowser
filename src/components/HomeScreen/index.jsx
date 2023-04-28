import React from 'react'
import HomeNavbar  from './HomeNavbar.jsx'
import HomeScreen from './HomeScreen'
import { useState } from 'react'

const Home = () => {
    const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
    <div className={darkTheme ? 'dark' : ''}>
    <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <HomeNavbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {/* <HomeScreen darkTheme={darkTheme} setDarkTheme={setDarkTheme}/> */}
        </div>
        </div>
    </>
  )
}

export default Home