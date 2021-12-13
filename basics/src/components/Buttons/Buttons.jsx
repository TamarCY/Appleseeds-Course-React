import React from "react";
import Button from "./Button";


class Buttons extends React.Component {
    render (){
    return (
        <>
        <Button buttonText = "Important" style={{fontWeight: "bold"}}/>
        <Button buttonText = {<i>"Not Important"</i>}/>
        <Button buttonText = "Pink" styleWithProps= "buttonStyle" />
        </>
    )
    }
}

export default Buttons

