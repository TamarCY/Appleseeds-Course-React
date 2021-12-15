import React from "react";


const CustomButton = (props) => {
        return (
            <button onClick={(e)=>{props.callBack(e)}} style={{ backgroundColor: props.buttonColor }}>{props.buttonColor}</button>
        )
}



export default CustomButton