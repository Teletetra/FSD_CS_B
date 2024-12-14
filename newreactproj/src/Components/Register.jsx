import React from 'react'
import { useState } from 'react';
const Register = () => {
        const [name,setName]=useState();
        const [email,setEmail]=useState();
        const [pass,setPass]=useState();
        const getData=(e)=>{
            e.preventDefault();
            const data={name,email,pass}
            setregdata(data);
            alert("Registration Succeffull")
        }
    return (
        <div>
        <h1>Registration page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputHome"  className="form-label">Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1"  className="form-label">Password</label>
            <input type="password" onChange={(e)=>setPass(e.target.value)} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  )
}

export default Register
