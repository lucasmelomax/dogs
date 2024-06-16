import React from "react";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Fotter from "./componentes/Fotter";
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componentes/Login/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </div>
  );
};

export default App;
