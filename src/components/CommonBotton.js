import React from "react";

const CommonButton =(props)=>{
    return( <div>
        <button 
         type={props.type}
         className={props.className}
         onClick={(event)=>props.onClick(event)}>
         {props.name}
        </button>
    </div>)
}
export default CommonButton;