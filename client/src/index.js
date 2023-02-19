import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import SearchDogs from './pages/Search-Dogs';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Unknown page!</h1>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search',
        element: <SearchDogs />
      }
    ]
    
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
