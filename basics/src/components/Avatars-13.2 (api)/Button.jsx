import React from "react"


class Button extends React.Component{
    render(){

          return (
            <button onClick={this.props.handelClick}>Filter</button>
        )
    }
}

    


export default Button