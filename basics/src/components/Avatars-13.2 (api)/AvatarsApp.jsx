import axios from "axios";
import React from "react";
import AvatarCard from "./AvatarCard";
import Button from "./Button";
import Input from "./Input"

class AvatarApp extends React.Component {
    state = {
        avatarsArr: [],
        filteredArr:[],
        input: "",
        
    }
    getAvatars = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=5")
        this.setState({avatarsArr: response.data.results})
    }
    componentDidMount = () => {
        this.getAvatars();
    }

    renderCards = () => {
        if (this.state.input){
            return  this.state.filteredArr.map((avatar)=>{return <AvatarCard key={avatar.cell} data={avatar}/>})

        } else {
        return (
            this.state.avatarsArr.map((avatar)=>{return <AvatarCard key={avatar.cell} data={avatar}/>})
        )
        }
    }

    

    filterAvatars = () => {
        const namesArr = this.state.avatarsArr.map((avatar)=> {return (avatar.name.first+" "+avatar.name.last)})
        const results = this.state.avatarsArr.filter((object)=> 
        object.name.first.toLowerCase().includes(this.state.input.toLowerCase()))
        this.setState({filteredArr:results})
    }

    onInputChange = (event) => {
        this.setState({input : event.target.value})
    }

    render(){
        return(
            <>
                <Input handelClick={this.filterAvatars} onInputChange={this.onInputChange}/>
                {this.renderCards()}
            </>
        )
    }
}


export default AvatarApp