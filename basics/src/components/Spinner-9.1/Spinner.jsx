import React from "react";
import "./Spinner.css" 

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        
     
    }
    
        
    render() {
        return (
            <div className={`Spinner-loader ${this.props.displayStatus}`}></div>
        )

    }
}

export default Spinner 