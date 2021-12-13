import React from "react";
import Button from "./Button";


const Buttons = () => {
    return (
        <>
        <Button buttonText = "Important" style={{fontWeight: "bold"}}/>
        <Button buttonText = {<i>"Not Important"</i>}/>
        </>
    )
}

export default Buttons

