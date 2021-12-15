import React from "react";
import FormInput from "./FormInput"
import FormMassage from "./FormMassage"
import FormOutput from "./FormOutput"



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayInput: true,
            displayOutput: true,
            displayMassage: true,
            firstName: "",
            lastName: "",
            age: "",
            freeText: "",
        

        }

    }

    // onFormSubmit (userInput) {

    onFormSubmit = (event, data)=> {
        event.preventDefault();
        this.setState({firstName:data})
    }

   

    onFormChange = (event) => {
        this.setState({firstName: event.target.value})
    }

    

    renderContent() {
            if (this.state.displayInput) {
                return <FormInput callback={this.onFormSubmit}/>
            }
            if (this.state.displayOutput) {
                return <FormOutput/>
            }
            if (this.state.displayMassage) {
                return <FormMassage/>
            }
        }
        
    
    render() {
        return (
            <>
                {this.renderContent()}
                {/* {this.state.displayInput  && <FormInput/>} */}
            <div>{this.state.firstName}</div>
            <div>{this.state.lastName}</div>

            </>

        )

    }
}

export default Form