import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Homepage from './components/homepage/Homepage';
import Categorypage from './components/categorypage/Categorypage';
import Itempage from './components/itempage/Itempage';
import Searchpage from './components/searchpage/Searchpage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="star-wars/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="star-wars/category" element={<Categorypage />}>
            <Route path="star-wars/:categoryId" element={<Categorypage />} />
          </Route>
          <Route path="star-wars/category/:categoryId/item" element={<Itempage />}>
            <Route path="star-wars/:itemId" element={<Itempage />} />
          </Route>
          <Route path="star-wars/searchpage" element={<Searchpage />} />
          <Route path="star-wars/*" element={<main className="container text-center Starjout text-white my-5"><p>Error: This path goes to the dark side! Go back immediately!</p></main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
