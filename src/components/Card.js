import React  from 'react'
import './Card.css'

export default function Card  (props) {
    const currentProject  = props.current
    
    const handleWebsite = (event, Link) => {
        window.open(Link, '_blank');
    }
    return (
        <div className="root">
            <img alt="project" className="img" src={currentProject.url}   />
            <h2  onClick = {(event) => handleWebsite (event, currentProject.git)}className="title"> {currentProject.name} {'   '}  {currentProject.iconForName}</h2>
           
            <ul className="ul" >
            {currentProject.lan.map(index =>{
                return (
                <li className="li"> <span>{index.icon}</span>{index.name} </li>
                )
            })}
            </ul>
           
        </div>
    )
}