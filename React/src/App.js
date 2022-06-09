import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Homepage from './Pages/Homepage';
import Products from './Pages/Products';
// import DisplayCollection from './Frontend/DisplayCollection';
// <DisplayCollection url = "getDogFood"/>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Homepage />} />
        </Route>
        <Route path = "/Products" element = {<Layout />}>
          <Route index element = {<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
