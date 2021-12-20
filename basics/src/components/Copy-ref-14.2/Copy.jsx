import React from "react";

class Copy extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            inputText: ""
        }
    }
    componentDidMount() {
    }

    updateClipboard = (newClip) => {
        navigator.clipboard.writeText(newClip).then(function() {
          console.log(newClip)
        }, function() {
            console.log("failed")
        });
      }

    render() {

        return (
            <div>
                <h1>Until when?</h1>
                <input ref={this.inputRef}
                    type="textArea"
                    value={this.state.inputText}
                    onChange={(e) => this.setState({ inputText: e.target.value })} />
                <button
                    onClick={() =>
                        {this.updateClipboard(this.inputRef.current.value)}}>
                    Copy
                </button>
            </div>
        )
    }
}

export default Copy

let temp;

