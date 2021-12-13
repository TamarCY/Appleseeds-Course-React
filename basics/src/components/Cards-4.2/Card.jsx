import React from "react";
import "./Card.css";



class Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card">
                <img src={this.props.imgUrl} alt="" />
                <h2>{this.props.header}</h2>
                <p>{this.props.description}</p>
                <div className="links">
                    <a href={this.props.shareLink}>NEW</a>
                    <a href={this.props.exploreLink}>EXPLORE</a>
                </div>
            </div>
        )
    }
}
export default Card