import React from "react";
import "./ChangingBox.css"

// className={`animated-box `+ this.state.animationClass}


class ChangingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorClass: "blue",
            colorPosition: 0
        }

    }

     colors = ["blue", "red", "green", "yellow", "white"]


     componentDidMount() {
        // setTimeout((this.changeColor(), 1000))
        this.setState({colorPosition:1})
        console.log (this.state.colorPosition)
    }

    componentDidUpdate() {
        setTimeout((this.changeColor, 1000))
    }

    changeColor () {
        console.log (this.state)
        this.state.colorPosition === 5?
        this.setState({colorPosition :0 }):
        this.setState((prev)=>{return {colorPosition: prev +1}})
        this.setState ({colorClass: this.colors[this.state.colorPosition]})
    }

    render() {
        return (

            <div className={this.state.colorClass} ></div>
        )

    }
}


export default ChangingBox