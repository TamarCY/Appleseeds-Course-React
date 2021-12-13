import React from "react";
import "./Card.css";



const Card = (props) => {
    return (
        <div className = "card">
            <img src={props.imgUrl} alt=""/>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
            <div className="links">
                <a href={props.shareLink}>SHARE</a>
                <a href={props.exploreLink}>EXPLORE</a>
            </div>
        </div>
    )
}
export default Card