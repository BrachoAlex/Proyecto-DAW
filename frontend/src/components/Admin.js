import React,{useState} from 'react'

import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";


function Add() {

    const [name,setName] = useState("")
    const [imageUrl,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [countInStock,setStock] = useState("")
    const [category,setCategory] = useState("")


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
    const categoryHandler = (e) =>{
        setCategory(e.target.value)
    }
    const addCharacter = () => {
    
        const newChar = {
            name: name,
            imageUrl: imageUrl,
            description: description,
            price: price,
            countInStock: countInStock,
            category: category
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
                    <label htmlFor="imageUrl">Image</label>
                    <input type="text" className="form-control" id="imageUrl" value={imageUrl} onChange={imageChangeHandler} />
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
                    <label htmlFor="countInStock">Stock</label>
                    <input type="text" className="form-control" id="countInStock" value={countInStock} onChange={stockChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id="category" value={category} onChange={categoryHandler} />
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