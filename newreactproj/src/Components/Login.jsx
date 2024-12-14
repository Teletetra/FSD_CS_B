

import { useState } from "react";
import React  from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {useNavigate} from 
const Login = ({regdata}) => {
    const [email,setEmail]=useState();
    const [pass,setpass]=useState();
    const navigate=useNavigate();
    function validate(e){
          e.preventDefault();
    if(regdata.email==email && regdata.pass==pass){
        alert("Login Successfully");
        navigate('/dashboard');
    }
    else{
        alert("Login Failed");
    }
    }
  return (
    <div>
      <h1>Login Page</h1>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" id="exampleInputEmail1" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputpass1" class="form-label">pass</label>
    <input type="pass" onChange={(e)=>setpass(e.target.value)} class="form-control" id="exampleInputpass1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={validate} class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
