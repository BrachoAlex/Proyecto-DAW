import React from 'react'

import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Arrivals from "./Arrivals";
import Footer from "./Footer";

function Home() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <h3 id="quote">- Make it simple, but significant -</h3>
    <h2 id="arrivals">New Arrivals</h2>
    <div className="container">
      <Arrivals/>
    </div>
    <Footer/>
  </div>
  )
}

export default Home;
