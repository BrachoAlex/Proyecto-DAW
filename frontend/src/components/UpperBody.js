import React from 'react'
import Navbar from "./Navbar";
import Catalog from "./Catalog";
import Footer from "./Footer";

export default function UpperBody() {
  return (
    <div>
      <Navbar/>
      <h1>Upper Body</h1>
      <Catalog />
      <Footer/>
    </div>
  )
}
