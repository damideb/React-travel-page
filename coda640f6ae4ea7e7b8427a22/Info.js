import React from "react"

export default function Info(props){
    return(

    <div className="content">
    <img src={props.item.imageUrl} className="image" />
    <div className="details">
    <small className="location"> {props.item.location}</small>
    <h2 className="title"> {props.item.title} </h2>
    <p className="date">{props.item.Date}</p>
    <p className="description">{props.item.description}</p>
    </div>
    </div>
 
    
    )
}