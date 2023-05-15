import React from 'react';
import {Route, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import Header  from './Header.js';
import Contact from './Contact.js';
import Navbar from './Navbar.js';
import Register from './Register.js';
//import He1 from './He1.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom/cjs/react-router-dom.min';
//import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
   <>    
   
     <main>     
      <Switch>
      <Route path="/" exact> <Header /></Route>
      <Route path="/contact" > <Contact /></Route>
      <Route path="/appointment" > <Navbar /></Route>
      <Route path="/gallery" > <Register /></Route>
      </Switch>
    
    </main>   

    </>
  );
}

export default App;
