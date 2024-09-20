import React from 'react'
import {Link} from "react-router-dom";
import Id from './id';
import Counter from './Counter';
import Login from './Login';
const Home = () => {
  return (
    
     
    <div className='main'>
       
         
        
         <div className='card'>
                <h1>My Profile</h1>
                <h2>I used basic HTML,CSS to create my Profile.</h2>
                <Link to={"./Id"}> 
                 <button className='visit-bth'>Visit</button>
                 </Link>
         </div>
      
         <div className='card'>
            <h1>View The Counter</h1>
            <h2>Here i used basic React to create it.</h2>
            <Link to={"./Counter"}>
            <button className='visit-bth'>Visit</button>
            </Link>
         </div>
         <div className='card'>
            <h1>login</h1>
            <h2>Tried login form,Wanna see?</h2>
            <Link to={"./Login"}>
            <button className='visit-bth'>Visit</button>
            </Link>
         </div>
         <div className='card'>
            <h1>Quiz</h1>
            <Link to={"./Login"}>
            <button className='visit-bth'>Visit</button>
            </Link>
         </div>
    </div>
  )
}

export default Home