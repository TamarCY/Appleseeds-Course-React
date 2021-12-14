import React from "react";




class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "pink"
        }
     
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoriteColor:"purple"})
        }
            ,1000)
    }

    componentDidUpdate(){
        const updatedElement = document.getElementById("updated");
        updatedElement.innerHTML = `<div>The updated favorite color is ${this.state.favoriteColor}</div>`
    }
        
    render() {
        return (
            <>
                <h1>My favorite color is -
                    {this.state.favoriteColor}</h1>
                    <div id="updated"></div>
            </>
        )

    }
}

export default LifeCycle 