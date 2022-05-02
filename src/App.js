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
      <div className="divider">
        <h1>In dedication to the beauty around us.</h1>
      </div>
      {/* MAKE THE ABOVE HAVE A TYPEWRITE EFFECT */}
      <SneakPeek />
      <EditSlider />
    </>
  );
}

export default App;
