import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Router, Routes, Route, Link } from "react-router-dom";

import Home from "./container/Home/Home.jsx";
import Graduation from "./container/Graduation/Graduation.jsx";
import Portraits from "./container/Portraits/Portraits.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/portraits" element={<Portraits />} />
      </Routes>
    </>
  );
}

export default App;
