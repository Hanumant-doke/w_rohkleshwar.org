import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import './index.css';  
import App from './App'; 
// import 'bootstrap/dist/css/bootstrap.css';
// import $ from 'jquery';  
// import Popper from 'popper.js';  
// import 'bootstrap/dist/js/bootstrap.bundle.min';  
import abc from './abc';
import About from './About';

const routing = (  
  <Router>  
    <div> 
      <Route  path="/App" component={App} />  
       <Route exact path="/abc" component={abc} />
       <Route exact path="/about" component={About} />
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  