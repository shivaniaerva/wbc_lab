import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [num,setnum]=useState(0);
    const add=()=>{
        setnum(prev=>prev+1);
    }
    const sub=()=>{
        setnum(prev=>prev-1);
    }
  return (
    <div >
         
        <button onClick={add}>Increment</button>
        <h1>{num}</h1>
        <button onClick={sub}>Increment</button>
         
    </div>
  )
}

export default Counter