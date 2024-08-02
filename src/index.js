
import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Destinations from "./Pages/Destinations";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path={`${process.env.PUBLIC_URL}`}
        element={<Destinations />}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/about`}
        element={<About />}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/destinations`}
        element={<Destinations />}
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
