import React from "react";


class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
     
    }
    inc = () => {
        this.setState ( {result : this.state.result + 1})
    }
        
    
    

    render() {
        return (
            <>
                <button onClick={this.inc}>Increment</button>
                <div>{this.state.result}</div>
            </>
        )

    }
}

export default Increment