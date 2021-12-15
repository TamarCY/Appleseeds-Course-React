import React from "react";




class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            freeText:"",
            age:""
        }

    }
    
    onInputChange = (event)=> {
        // this.setState({event: e.target.value})
    }

    render() {
        return (
            <form onSubmit={(event)=>this.props.callback(event, this.state.firstName)}>
                <label>  
                    First Name:
                    <input type="text" name="firstName" 
                    onChange={(e)=>this.setState({firstName: e.target.value})} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last" />
                </label>
                <label>
                    Free Text:
                    <textarea type="text-area" name="free" />
                </label>
                <label>
                    Age:
                <select>
                    <option value="0">0-18</option>
                    <option value="0">19-30</option>
                    <option value="0">31-50</option>
                    <option value="0">50+</option>
                </select>
                </label>
                <input type="submit" value="Continue" />
            </form>
            )

    }
}

export default FormInput