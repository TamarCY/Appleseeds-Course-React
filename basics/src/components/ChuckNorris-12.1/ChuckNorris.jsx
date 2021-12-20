import React from "react";
import axios from "axios";



class ChuckNorris extends React.Component {
    state = {
        random: '',
        categories: [],
        categoryJoke: ""
    };
    getJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        this.setState({ random: response.data.value })
    }

    renderCategories = () => {
        return this.state.categories.map(element => {return  <button  key={element}>{element}</button> })
    }

    getCategory = async () => {
        const response = await axios.get("https://api.chucknorris.io/jokes/categories");
        console.log(response)
        this.setState({ categories: response.data },
            () => { this.renderCategories() }

        );
    }


    componentDidMount = () => {
        this.getCategory()

    }

    getCategoryJoke = async (category) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        this.setState({categoryJoke:response.data.value})
    }

    render() {
        return (
            <>
                <button onClick={this.getJoke}>Click for a joke</button>
                <div>{this.state.random}</div>
                <div className="categories" onClick={(event)=>{this.getCategoryJoke(event.target.innerText)}}>{this.renderCategories()}</div>
                <div>{this.state.categoryJoke}</div>
            </>
        )
    }
}


export default ChuckNorris