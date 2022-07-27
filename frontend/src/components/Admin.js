import React,{useState} from 'react'

import Navbar from "./Navbar";
import Footer from "./Footer";

function Add() {

    const [name,setName] = useState("")
    const [role,setRole] = useState("")
    const [age,setAge] = useState("")
    const [fp,setFP] = useState("")


    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const roleChangeHandler = (e) => {
        setRole(e.target.value)
    }

    const ageChangeHandler = (e) =>{
        setAge(e.target.value)
    }

    const fpChangeHandler = (e) =>{
        setFP(e.target.value)
    }

    const addCharacter = () => {
    
        const newChar = {
            name: name,
            role: role,
            age: age,
            forcePoints: fp
        }


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
                    <label htmlFor="role">Role</label>
                    <input type="text" className="form-control" id="role" value={role} onChange={roleChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" className="form-control" id="age" value = {age} onChange={ageChangeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="force-points">Force Points</label>
                    <input type="text" className="form-control" id="force-points" value={fp} onChange={fpChangeHandler} />
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