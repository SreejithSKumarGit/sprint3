import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom"

const Login = () => {
  let navigate=useNavigate();
  const{isAuth,toggleAuth}=useContext(AuthContext);
  const [formData,setFormData]=React.useState({
    email:"",
    password:""
  });
  const handleChange=(e)=>
  {
    let{name,value}=e.target;

    setFormData({...formData,[name]:value})
    
  }
  const handleRegister=(e)=>
  {
    e.preventDefault();
    console.log(formData);
    fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{"Content-type":"Application/json"}
        })
        .then((res)=>res.json())
        .then((res)=>{
          res.token?toggleAuth(true):toggleAuth(false);
          
         
        })
        .catch((Error)=>
        {
          console.log(Error);
        })
  
  }
  if(isAuth)
  {
    console.log(isAuth);
    navigate(`/Home`);
  }
  const {email,password}=formData;
  return <div>
    <Navbar/>
    <form onSubmit={handleRegister}>
      <label htmlFor="">Email :</label>
      <input
      name="email" 
      type="text" 
      value={email}
      onChange={handleChange}/>
      <br />
      <label htmlFor="">Password</label>
      <input
      name="password" 
      type="password"
      value={password}
      onChange={handleChange} />
      <br />
      <input type="submit" />
      
    </form>
  </div>;
};

export default Login;
