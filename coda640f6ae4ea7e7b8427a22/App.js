import React from "react"
import Info from "./Info"
import data from "./data"
import Header from "./Heading"


export default function App(){
    const dataElement = data.map(function(item){
        return(
             < Info
             key={item.id}
             item={item} />
        )
    })
    
    return(
        <div className="body">
        <Header />
    {dataElement}
    
    </div>
    )
}
