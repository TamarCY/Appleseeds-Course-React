import React from "react";
import Card from "./Card";
import "./Card.css";

 const Cards = () => {
     return (
         < div className="allCards">
         <Card 
            imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ansicht_1.jpg/500px-Ansicht_1.jpg"
            header = "Sitges"
            description ="Sitges (Catalan pronunciation: [ˈsidʒəs]) is a town about 35 kilometres southwest of Barcelona"
            shareLink ="https://en.wikipedia.org/wiki/Sitges"
            exploreLink ="https://en.wikipedia.org/wiki/Sitges"
        />
         <Card
            imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ansicht_1.jpg/500px-Ansicht_1.jpg"
            header = "Sitges"
            description ="Sitges (Catalan pronunciation: [ˈsidʒəs]) is a town about 35 kilometres southwest of Barcelona"
            shareLink ="https://en.wikipedia.org/wiki/Sitges"
            exploreLink ="https://en.wikipedia.org/wiki/Sitges"
        />
        <Card
            imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ansicht_1.jpg/500px-Ansicht_1.jpg"
            header = "Sitges"
            description ="Sitges (Catalan pronunciation: [ˈsidʒəs]) is a town about 35 kilometres southwest of Barcelona.jpg"
            shareLink ="https://en.wikipedia.org/wiki/Sitges"
            exploreLink ="https://en.wikipedia.org/wiki/Sitges"
            />
        </div>
         
     )
 }


 export default Cards