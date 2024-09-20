import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Link} from "react-router-dom";
import Home from "./components/Home";
import Id from './components/id';
import Counter from './components/Counter';
import Login from './components/Login';
const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Id"} element={<Id/>}/>
        <Route path={"/Counter"} element={<Counter/>}/>
        <Route path={"/Login"} element={<Login/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App