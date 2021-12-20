import React from "react";


class Input extends React.Component{
    state={input:""}
    render(){
        return(
            <>
            <input type="text" onChange={(e)=>this.props.onInputChange(e)}></input>
            <button onClick={this.props.handelClick}>Filter</button>
            {/* <div>{this.state.input}</div> */}
            </>
        )
    }
}

export default Input


