import React from 'react'  
import { Route, Link } from 'react-router-dom'  
class About extends React.Component {  
  render() {  
    return(
    
    <div> 
        <h1>About</h1> 
        <Link to="/contact">Contacts</Link>  
    </div>
     ) 
  }  
}  
export default About  