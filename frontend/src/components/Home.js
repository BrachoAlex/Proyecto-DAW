import React from 'react'

import Navbar from "./Navbar";
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <h2>New Arrivals</h2>
  </div>
  )
}

export default Home;
