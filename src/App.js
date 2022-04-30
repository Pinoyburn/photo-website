import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import SneakPeek from "./components/SneakPeek/SneakPeek";
import EditSlider from "./components/EditSlider/EditSlider";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div className="divider" />
      <SneakPeek />
      <EditSlider />
    </>
  );
}

export default App;
