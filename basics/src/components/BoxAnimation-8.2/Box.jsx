import React from "react";
import "./BoxAnimation.css";




class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           temp: ""
        }
     
    }
    componentDidMount(){
        setTimeout(()=>{
        }
            ,1000)
    }

    componentDidUpdate(){
        
    }
        
    render() {
        return (
            <div className = "box-div" style={{height: this.props.size, width: this.props.size}}></div>
        )
    }
}

export default Box