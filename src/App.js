import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <div className="filler">Filler</div>
    </>
  );
}

export default App;
