import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Router, Routes, Route, Link } from "react-router-dom";

import Home from "./container/Home/Home.jsx";
import Graduation from "./container/Graduation/Graduation.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/graduation" element={<Graduation />} />
      </Routes>
    </>
  );
}

export default App;
