import React from "react";
import "./Spinner.css";
import Spinner from "./Spinner";

class SpinnerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayClass: ""
        }
     
    }
    componentDidMount(){
      setTimeout(()=>{
          this.setState({displayClass: "Spinner-hide" })
      },2000)
    }

    componentDidUpdate(){
        }
        
    render() {
        return (
            <Spinner displayStatus={this.state.displayClass}/>
        )

    }
}

export default SpinnerApp 