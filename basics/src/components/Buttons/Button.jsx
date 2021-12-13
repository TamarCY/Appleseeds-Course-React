import React from "react";
import "./Buttons.css"


class Button extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
    return (
    <button className={this.props.styleWithProps} style={this.props.style}>{this.props.buttonText}</button>
    )
}
}



export default Button;