import React from "react";
import "./ChangingBox.css"

// className={`animated-box `+ this.state.animationClass}


class ChangingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divClass: "empty",
            counter: 0
        }

    }

    colors = ["blue", "red", "green", "yellow", "white"]

    componentDidMount() {
        setTimeout(() => {
            this.setState((prevState) => {
                return (
                { counter: prevState.counter + 1 }
                )
            })
        }, 1000)
    }

    render() {
        return (
            <div className={this.state.divClass} >{this.state.counter}</div>
        )

    }
}


export default ChangingBox