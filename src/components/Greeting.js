import React  from 'react'
import  logo from '../data/img/profilePicture.jpg'
import Education from './Education'
import Button from '@material-ui/core/Button';

import './Greeting.css'
import { FaFileContract } from 'react-icons/fa';
const  Greeting = (props) => {
const about = props.resumeAbout
const name = props.resumeName

const contact = (event) => {
    alert("contact")
}
    return (
            // Picture of me 
        <div id="containerGreeting" >
            <img  id="profileMe" src= {logo}   />   
            <h3  id="mynameis"> Hi, my name is </h3>
            <h2 id="name"> {name} </h2>
            <h1 id="about"> Fullsnack Engineer | Software Engineer   </h1>
            <h3 id="school"> I am currently enjoy my senior year at  <span id="university"> University of Texas at San Antonio </span></h3>
            <Button onClick={(event)=> contact(event)}variant="contained" color="secondary">
                GET IN TOUCH
            </Button>
        </div>
    )
}
export default Greeting;