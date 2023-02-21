import React from "react";
import img from "../resources/restaurant.jpg"

import "../styles/LoginForm.css"
const Card=(props) =>{
    return(
    <div>   
     
         <div class="card">
            <div class="body-image">
                <img src={props.img ?props.img : img } alt=""/>
            </div>
            <div class="body-content">
                <div class="rest-name wrap-text ">
                   <h1> {props.name} </h1>
                </div>
                <div class="rest-description wrap-text">
                    <p><span>{props.description}</span></p>
                </div>
                <div class="rest-location">
                    <div class="location-icon">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div class="location-name">
                        <p>{props.location}</p>
                    </div>
                </div>
                <div class="rest-review">
                    <p>{props.review}</p>
                </div>
            </div>
        </div>
     </div>
    
    
    )
}
export default Card;