import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import SneakPeek from "./components/SneakPeek/SneakPeek";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <SneakPeek />
    </>
  );
}

export default App;
