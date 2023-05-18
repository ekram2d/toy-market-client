import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  
  children:[{
    path:'/',
    element:<p>this is home</p>

  },
  {
    path:"/items/:id",
    element:<p>items</p>,
   

  },
  
  {
    path:'/login',
    element:<p>this is login</p>

  },
  {
    path:'/register',
    element:<this>this is register</this>

  },
  {
    path:'/blog',
    element:<p>blog</p>

  },

]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
