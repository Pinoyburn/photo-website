import React from 'react';
import LandingPage from "../../components/LandingPage/LandingPage";
import SneakPeek from "../../components/SneakPeek/SneakPeek";
import EditSlider from "../../components/EditSlider/EditSlider";

import './Home.css';


function Home() {
  return (
    <section>
        <LandingPage />
        <div className="divider">
          <h3>Wouldn't you like to make a moment last forever?</h3>
        </div>
        {/* MAKE THE ABOVE HAVE A TYPEWRITE EFFECT */}
        <SneakPeek />
        <EditSlider />
    </section>
  )
}

export default Home