import React from 'react'
import { Route, Link } from 'react-router-dom'
class About extends React.Component {
  render() {
    return (
      <div class="container">
  <h1>Height Utilities</h1>
  <p>Set the height of an element with the w-* classes:</p>
  <div style={{height:"200px",backgroundColor:"#ddd"}}>
    <div class="h-25 d-inline-block p-2 bg-warning">Height 25%</div>
    <div class="h-50 d-inline-block p-2 bg-warning">Height 50%</div>
    <div class="h-75 d-inline-block p-2 bg-warning">Height 75%</div>
    <div class="h-100 d-inline-block p-2 bg-warning">Height 100%</div>
    <div class="mh-100 d-inline-block p-2 bg-warning" style={{height:"500px"}}>Max Height 100%</div>
  </div>
</div>

    );
  }
}
export default About