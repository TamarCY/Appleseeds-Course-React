import React from "react";
import "./Decrement.css"


class Decrement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            colorClass: "black"
        }
     
    }
    inc = () => {
        this.setState ({counter : this.state.counter + 1});
        // this.changeColor();
    }
    dec = () => {
        this.setState ({counter : this.state.counter - 1});
        // this.changeColor();


    }
    changeColor = () => {
        if (this.state.counter < 0) {
            return "red"
            // this.setState({colorClass : "red"})
            // return
        }
        if (this.state.counter > 0) {
            return "green"
            // this.setState({colorClass : "green"})
            // return
        // } else {
        //     this.setState({colorClass : "black"})
        }
        return "black"
    }
    render() {
        return (
            <>
            {/* <p className={this.state.colorClass}>{this.state.counter}</p> */}
            <button onClick={this.inc}>+</button>
            <p className={this.changeColor()}>{this.state.counter}</p>
            <button onClick={this.dec}>-</button>
            </>
        )
    }

  
}

export default Decrement