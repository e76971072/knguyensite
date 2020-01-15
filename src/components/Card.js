import React  from 'react'
import './Card.css'
export default function Card  (props) {
    const currentProject  = props.current
    // I have something in comment
    const styles = {
        title :{
           color: "rgba(255,104,115,1)", 
           letterSpacing: "1.5px",
           textAlign: "center",
        },
    root: {
        backgroundColor: "rgba(254,255,249)",
        width: "fit-content",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        zIndex: "2", 
    }, 
    ul : {
        textAlign: "center",
    },
    img: { 
        backgroundColor: "rgba(220,220,220,0.4)",
        zIndex: "1", 
    },
    li: {
        display: "inline-block", 
        margin: "10px",
        fontSize: "1.1em",
        color: "rgba(48,69,92,0.8)", 
        letterSpacing: "1px", 
        }, 
    }   
    console.log (currentProject.lan)
    return (
        <div className="root">
            <img  className="img" src={currentProject.url}   />
            <h2 className="title"> {currentProject.name}</h2>
            <ul className="ul" >
            {currentProject.lan.map(index =>{
                return (
                <li className="li"> {index} </li>
                )
            })}
            </ul>
           
        </div>
    )
}