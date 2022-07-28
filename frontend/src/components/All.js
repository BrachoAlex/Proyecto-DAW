import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


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
    <div>
        <Navbar/>
        <div className="container">
            <a href="/"><button className="myButton">Search Items</button></a>
            <a href="/add"><button className="myButton">Add New Item</button></a>
        
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <strong>Items</strong>
                    </div>
                    <div className="card-body">
                        <ul id="character-section" className="list-group"></ul>
                            {
                                data.map((info) => {
                                    return (
                                        <li className="list-group-item" key={info.name}>
                                            <h5>Name: {info.name}</h5>
                                            <h7>Image: {info.imageUrl}</h7><br></br>
                                            <h7>Description: {info.description}</h7><br></br>
                                            <h7>Price: ${info.price}</h7><br></br>
                                            <h7>Stock: {info.countInStock}</h7><br></br>
                                            <hr />
                                        </li>
                                    );
                                })
                            }
                        </div>
                    <Footer/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default All;
