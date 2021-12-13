import React from "react";


class Decrement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
     
    }
    inc = () => {
        this.setState ( {result : this.state.result + 1})
    }
    dec = () => {
        this.setState ( {result : this.state.result - 1})
    }
        
    
    render() {
        return (
            <>
            <p>{this.state.result}</p>
            <button onClick={this.inc}>+</button>
            <button onClick={this.dec}>-</button>

            </>
        )
    }

  
}

export default Decrement