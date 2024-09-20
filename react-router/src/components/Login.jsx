import React, { useState } from 'react'

const Login = () => {
    const [mail,setmail]=useState("");
    const [pass,setpass]=useState("");
    const handlemail=(e)=>{
        setmail(e.target.value);
    };
    const handlpass=(e)=>{
        setpass(e.target.value);
    };
    const handlesubmit=()=>{
        alert("Name: "+mail +"password: "+pass);
    };
  return (
    <div>
        <input placeholder='enter mail id' type='email' onChange={(e)=>handlemail(e)}/>
        <input placeholder='enter paaword' type='password' onChange={(e)=>handlepass(e)}/>
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login