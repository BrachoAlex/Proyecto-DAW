import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import UpperBody from "./components/UpperBody";
import LowerBody from "./components/LowerBody";
import Accesories from "./components/Accesories";
import Footwear from "./components/Footwear";
import Admin from "./components/Admin";
import All from "./components/All";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return   ( //<div className="app">This is working!</div>;
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Home />}  />
        <Route path="/lower-body" element = { <LowerBody />}  />
        <Route path="/upper-body" element = { <UpperBody />}  />
        <Route path="/footwear" element = { <Footwear />}  />
        <Route path="/accesories" element = { <Accesories />}  />
        <Route path="/admin" element = { <Admin />}  />
        <Route path='/all' element ={ <All />}/>


      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
