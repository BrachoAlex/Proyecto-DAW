import React,{useState} from 'react'

import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";


function Delete() {
    const [id,setId] = useState("")
    
    const idChangeHandler = (e) => {
        setId(e.target.value)
        
    }
    const deleteItem = () => {
        const item = {
            id : id
        }
  

        axios.delete("http://localhost:5000/deleteProduct", item)
        .then((response)=>{
            console.log(response)

        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div>
        <input type="text" className="form-control" id="description" value = {id} onChange={idChangeHandler} />
        {console.log(id)}
        <div className="text-right">
                <button  className="btn btn-primary btn-md" id="add-btn" onClick={deleteItem}>
                    <span className="fa fa-fire"></span> Add Item</button>
                </div>
        <Footer/>
    </div>
  )
}

export default Delete