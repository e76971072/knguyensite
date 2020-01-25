import React, {useState}  from 'react'
import  logo from '../data/img/profilePicture.jpg'
import Education from './Education'
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

import { FaRegPaperPlane  } from "react-icons/fa";
import './Greeting.css'
import { FaFileContract } from 'react-icons/fa';
const  Greeting = (props) => {
const about = props.resumeAbout
const name = props.resumeName
const email = props.resumeEmail

// checking for hover state over button contact 
const [style, setStyle] = useState(true);

// Dynamically changing the text 
const [textContact, setTextContact] = useState("Get IN TOUCH"); 


// preDefined styles for hover state 
const styles =  {
    onMouseEnter: {
        background: "transparent", 
        border: "1px solid white", 
        color: "red", 
    },
    onMouseLeave :{ 
        borderRadius: "1rem", 
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    }
}; 

const contactHover = (event ) => {
   setTextContact("an.nguyen1197@gmail.com"); 
   setStyle(!style); 
  
}
const contactHoverLeave = (event) => {
    setTextContact("GET IN TOUCH"); 
    setStyle(!style); 
}
    return (
            // Picture of me 
        <div id="containerGreeting" >
            <img  id="profileMe" src= {logo}   />   
            <h3  id="mynameis"> Hi, my name is </h3>
            <h2 id="name"> {name} </h2>
            <h1 id="about"> Fullsnack Engineer | Software Engineer   </h1>
            <h3 id="school"> I am currently enjoy my senior year at  <span id="university"> University of Texas at San Antonio </span></h3>
            <Button 
            style = {style == true ? styles.onMouseEnter : styles.onMouseLeave}
            onMouseEnter={(event)=> contactHover(event)} 
            onMouseLeave={(event)=> contactHoverLeave(event)}
            variant="contained" >
                 {textContact} &nbsp; <FaRegPaperPlane/>
            </Button>
        </div>
    )
}
export default Greeting;