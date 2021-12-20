import React from "react";
import {data} from "./data.js"
import Names from "./Names.jsx";

class DataApp extends React.Component {
    state= {
        names: [],
        oldObjects: []
    }
    getNames = () => {
        const allNames = data.map((person)=>{return person.name})
        this.setState({names:allNames})
        // return data.map((person)=>{return <h1>{person.name}</h1> })

    }

    getOldPeople = () => {
        const allOld = data.filter((person)=> {return parseInt(person.birthday.slice(-4))<1990})
        this.setState({oldObjects:allOld})
    }

    componentDidMount () {
        this.getNames();
        this.getOldPeople();

    }

    componentDidUpdate () {
        
    }

    render(){
         console.log(this.state.names)
        return(
            <>
            <Names namesArr={this.state.names}/>
            </>
        )
    }
}

 export default DataApp 