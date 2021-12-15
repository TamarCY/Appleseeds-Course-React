import React from "react";




class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
     
    }
       
    render() {
        console.log(this.props.data)
        return (
            <div>
           <p>First name:{this.props.data.firstName}</p>
           <p>Last name:{this.props.data.lastName}</p>
           <p>Age:{this.props.data.age}</p>
           <p>{this.props.data.freeText}</p>
           <button onClick={(e)=>this.props.callback(e)} id="back">Back</button>
           <button onClick={(e)=>this.props.callback(e)} id="send">Send Survey</button>
           </div>
        )

    }
}

export default FormInput 