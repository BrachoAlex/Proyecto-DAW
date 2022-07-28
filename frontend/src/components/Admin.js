import React,{useState} from 'react'

import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";


function Add() {

    const [name,setName] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")


    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const imageChangeHandler = (e) => {
        setImage(e.target.value)
    }

    const descriptionChangeHandler = (e) =>{
        setDescription(e.target.value)
    }

    const priceChangeHandler = (e) =>{
        setPrice(e.target.value)
    }

    const stockChangeHandler = (e) =>{
        setStock(e.target.value)
    }
    const addCharacter = () => {
    
        const newChar = {
            name: name,
            image: image,
            description: description,
            price: price,
            stock: stock
        }

        axios.post("http://localhost:5000/addProduct",newChar)
        .then((response)=>{
            console.log(response)

        })
        .catch((error)=>{
            console.log(error)
        })

    }

  return (
    <div>
        <Navbar/>
        <div id="buttons" className="container">
        <a href="/">
            <button className="myButton"> Search Items</button>
        </a>
        <a href="/all">
            <button className="myButton"> All Items</button>
        </a>
        </div>

        <div className="container">
        <div className="row">
        <div className="col-lg-12">

            <div className="card">
            <div className="card-header">
                Add Items
            </div>
            <div className="card-body">
                <form role="form">

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={nameChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="text" className="form-control" id="imgUrl" value={image} onChange={imageChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" value = {description} onChange={descriptionChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" value={price} onChange={priceChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input type="text" className="form-control" id="countInStock" value={stock} onChange={stockChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Category</label>
                    <input type="text" className="form-control" id="category" value={stock} onChange={stockChangeHandler} />
                </div>

                </form>
                <br/>
                <div className="text-right">
                <button  className="btn btn-primary btn-md" id="add-btn" onClick={addCharacter}>
                    <span className="fa fa-fire"></span> Add Item</button>
                </div>
            </div>
            </div>

        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Add