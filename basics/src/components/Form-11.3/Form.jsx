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


    onFormSubmit = (event, data)=> {
        event.preventDefault();
        // console.log(data)
        this.setState({firstName: data.firstName,
                    lastName: data.lastName,
                    age: data.age,
                    freeText: data.freeText,
                    displayInput: false,
                    displayOutput: true

        })
    }

    

   
    
   
    outputButtons = (event) => {
        event.target.id === "back" && this.setState({displayOutput:false, displayInput:true})
        event.target.id === "send" && this.setState({displayOutput:false, displayMassage: true})
    }
    

    renderContent() {
            if (this.state.displayInput) {
                return <FormInput callback={this.onFormSubmit} data={this.state}/>
            }
            if (this.state.displayOutput) {
                return <FormOutput data={this.state} callback={this.outputButtons}/>
            }
            if (this.state.displayMassage) {
                return <FormMassage/>
            }
        }
        
   
    render() {
        return (
            <>
                {this.renderContent()}
            </>

        )

    }
}

export default Form