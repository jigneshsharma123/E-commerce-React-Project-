import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const HomeRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
 
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={HomeRouter } />
)
