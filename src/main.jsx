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
import Register from './Components/Register/Register';

import Details from './Components/Details/Details';
import AllToy from './AllToy/AllToy';
import AddToy from './AddToy/AddToy';
import MyToys from './MyToys/MyToys';

import Updated from './Updated/Updated';
import Blog from './Blog/Blog';
import AuthProvider from './Components/Register/Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Erropage></Erropage>,

    children: [{
      path: '/',
      element: <Home></Home>

    },
    {
      path: "/items/:id",
      element: <p>items</p>,


    },

    {
      path: '/login',
      element: <Login></Login>

    },
    {
      path: '/register',
      element: <Register></Register>

    },
    {
      path: '/blog',
      element: <Blog></Blog>

    },
    {
      path: '/toy',
      element: <AllToy></AllToy>,
      loader: ({ params }) => fetch("https://server-fawn-chi.vercel.app/alltoy")

    },
    {
      path: '/details/:id',
      element: <Details></Details>,
      loader: ({ params }) => fetch(`https://server-fawn-chi.vercel.app/singleservices/${params.id}`)
    },
    {


      path: '/singletoy/:id',
      element: <Details></Details>,
      loader: ({ params }) => fetch(`https://server-fawn-chi.vercel.app/singleuser/${params.id}`)
    },
    {
      path: '/addToy',
      element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
    },
    {
      path:'/mytoys',
      element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
    },
    {
      path:'/updated/:id',
      element:<Updated></Updated>,
      loader: ({ params }) => fetch(`https://server-fawn-chi.vercel.app/updated/${params.id}`)
      
    }
  

    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

  <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);