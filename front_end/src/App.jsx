import React from 'react'
//import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
       <Route path={"/"} element={<Menu/>}/>
       <Route path={"/Menu"} element={<Menu/>}/>
       <Route path={"/Contact"} element={<Contact/>}/>
       <Route path={"/About"} element={<About/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App