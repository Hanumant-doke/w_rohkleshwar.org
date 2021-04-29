import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'  
import About from './About'
import Contact from './Contact';
import student from './student';
import satish from './satish';
import demo1 from './demo1';
import demo2 from './demo2'
const routing = (  
    <Router>  
      <div>  
        <Route exact path="/" component={App} />  
        <Route exact path="/about" component={About} />  
        <Route exact path="/contact" component={Contact} />  
        <Route exact path="/student" component={student} />  
        <Route exact path="/satish" component={satish} /> 
        <Route exact path="/demo1" component={demo1} /> 
        <Route exact path="/demo2" component={demo2} />
      </div>  
    </Router>  
  )  
  ReactDOM.render(routing, document.getElementById('root'));  