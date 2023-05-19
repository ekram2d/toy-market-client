import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './Components/Home/Home';
import Erropage from './Components/ErrorPage/Erropage';
import Login from './Components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Erropage></Erropage>,
  
  children:[{
    path:'/',
    element:<Home></Home>

  },
  {
    path:"/items/:id",
    element:<p>items</p>,
   

  },
  
  {
    path:'/login',
    element:<Login></Login>

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


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);