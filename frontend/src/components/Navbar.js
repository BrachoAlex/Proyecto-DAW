import React from "react";
import myLogo from "../img/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">

  <a className="navbar-brand" href="/"><img className="logo" src={myLogo} alt="logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/upper-body">upper body</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/lower-body">lower body</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/footwear">footwear </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/accesories">accesories </a>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}
