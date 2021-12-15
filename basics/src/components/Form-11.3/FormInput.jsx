import React from "react";




class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.data.firstName,
            lastName: this.props.data.lastName,
            freeText: this.props.data.freeText,
            age: this.props.data.age
        }

    }



    onInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={(event) => this.props.callback(event, this.state)}>
                <label>
                    First Name:
                    <input type="text" id="firstName" value={this.state.firstName}
                        onChange={(e) => this.onInputChange(e)} />

                </label>
                <label>
                    Last Name:
                    <input type="text" id="lastName" value={this.state.lastName}
                        onChange={(e) => this.onInputChange(e)} />
                </label>
                <label>
                    Free Text:
                    <textarea type="text-area" id="freeText" value = {this.state.freeText}
                        onChange={(e) => this.onInputChange(e)} />
                </label>
                <label >
                    Age:
                    <select id="age" onChange={(e) => this.onInputChange(e)} value={this.state.age}>
                        <option selected="true" disabled="disabled"></option>
                        <option value="0-18">0-18</option>
                        <option value="19-30">19-30</option>
                        <option value="31-50">31-50</option>
                        <option value="50+">50+</option>
                    </select>
                </label>
                <input type="submit" value="Continue" />
            </form>
        )

    }
}

export default FormInput