import React from "react";
import "./ChangingBox.css"

// className={`animated-box `+ this.state.animationClass}


class ChangingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            divClass: "box-animation"
        }

    }

    // hsl(0, 100%, 50%)

    componentDidMount() {
       setTimeout(()=>{
           this.setState({divClass:"circle-animation"})
       },2500)    
    }

    render() {
        return (
            <div className={this.state.divClass}></div>
        )

    }
}


export default ChangingBox