import React from "react";
import './Hide.css'
class Hide extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayClass : "inner"
        }
    }
    toggleInner = () => {
        if (this.state.displayClass === "inner") {
        this.setState({displayClass: "hide"})}
        else {
        this.setState({displayClass: "inner"})
        }
    }

    render(){
        return (
            <div className = "outer">
                <button onClick={this.toggleInner}>show / hide</button>
                <div  className={this.state.displayClass}></div>
            </div>
        )
    }


}

export default Hide