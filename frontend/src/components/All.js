import React, { useEffect, useState } from "react";
import axios from "axios";

function All() {
  useEffect(() => {
    getAllCharacters();
  }, []);

  const [data, setData] = useState([]);

  const getAllCharacters = () => {
    
    axios.get("http://localhost:5000/api/productData").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="container">
    <div className="jumbotron">
      <h1>Star Wars Express</h1>
      <h3>The greatest resource in the galaxy for Star Wars statistics!</h3>
      <hr />
      <a href="/">
        <button className="btn btn-danger btn-lg">
          <span className="fa fa-eye"></span> Search Characters
        </button>
      </a>
      <a href="/add">
        <button className="btn btn-danger btn-lg">
          <span className="fa fa-plus"></span> Add New Character
        </button>
      </a>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <strong>Character Database</strong>
          </div>
          <div className="card-body">
            <ul id="character-section" className="list-group"></ul>

            {data.map((info) => {
              return (
                <li className="list-group-item" key={info.name}>
                    <h2>Name: {info.name}</h2>
                    <h2>Image: {info.imageUrl}</h2>
                    <h2>Description: {info.description}</h2>
                    <h2>Price: {info.price}</h2>
                    <h2>Stock: {info.countInStock}</h2>
                    <hr />
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default All;
