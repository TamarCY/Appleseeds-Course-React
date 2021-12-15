import React from "react";
import CustomButton from "./CustomButton";



const colors = ["blue", "red", "yellow"];
class Child2Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            color: ""
        }
    }
    getColor = (event) => {
        this.setState({ color: event.target.innerText })
    }
    render() {
        return (
            <div>
                <div>The state color is {this.state.color}</div>
                {colors.map((color, index) => {
                    return (
                        <CustomButton buttonColor={color} key={index} callBack={this.getColor} />

                    )
                }
                )
    }
            </div>
        )
                        
                        
            
}
}



                        export default Child2Parent