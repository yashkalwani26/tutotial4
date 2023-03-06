import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Profiles, Details } from "./components/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/profiles' element={<Profiles />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
