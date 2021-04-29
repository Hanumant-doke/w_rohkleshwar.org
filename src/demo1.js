
import { Component } from "react"
class App  extends Component{
    constructor(props){
        super(props);
        this.state={
            data: 'www.javatpoint.com'
        }
    }
    handleEvent=()=>{
        console.log(this.props);
    }
    render(){
        return(
            <div className="App">
                <h2>React constructor example</h2>
                <input type="text" value ={this.state.data} />
                <button onClick = {this.handleEvent}>Please Click</button>   
            </div>
        );
    }
}
export default App;