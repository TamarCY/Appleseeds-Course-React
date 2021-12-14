import React from "react";
import Box from "./Box";
import "./BoxAnimation.css"

// className={`animated-box `+ this.state.animationClass}


class BoxAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayClass: "hide"
        }
     
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({displayClass: "animation-div"})
        }, 1000)
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.setState({displayClass: "hide"})
        }, 4000)
    }
        
    render() {
        return (
            <>
            {/* <div className=".animation-div">
                <Box size = "40px"/>
                <Box size = "60px"/>
                <Box size = "20px"/>
            </div> */}
            <div className = {this.state.displayClass}>
                <div className = "box-div"></div>
                <div className = "box-div"></div>
                <div className = "box-div"></div>
            </div>
            </>
        )

    }
}

export default BoxAnimation 