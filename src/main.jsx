import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
    {/* <Router> */}
      {/* <App /> */}

      {/* <RouterProvider router={router} /> */}
    {/* </Router>, */}

  </React.StrictMode>,
)
