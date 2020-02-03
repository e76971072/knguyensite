import React, {useState, useEffect} from 'react'
import './Experience.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from './Title'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {FaMapMarkerAlt} from "react-icons/fa"
import styled, {keyframes} from 'styled-components'
import Bounce from 'react-reveal/Bounce';


import './Experience.css'

// Experience Section

const Experience = (props) => {
    const [position, setPos] = useState(0);
    useEffect(() => {
        setPos(window.pageYOffset);
    })
    const rotate = keyframes`
    from {
      opacity: 0.75; 
      transform: translateY(-100%);
    }
  
    to {
      opacity: 1; 
      transform: translateY(0);
    }
  `;
  const Rotate = styled.div`
    animation: ${rotate} 10s linear ;
  `; 
    const [hoverOne, setHoverOne] = useState (false)
   
 const handleHoverOne = (event) => {
    setHoverOne(!hoverOne);
   
 }
 const styles = {
    notDisplay:{
        display: "none"
    },
    display: {
        display: "inline"
    }
 }
  const experience = props.experience
    return (
        <div id="containerExperience" className="containerExperience">
        <Title index={"03"} titleName={"Recent Work"}/>
        <div  className="page-wrapper" >
     {experience.map( index =>{
            return (
            <Bounce left>
            <div id={index.key}  
            className="profile-1"  
            style={rotate}>
            <div className="Image">
                <Avatar alt="Remy Sharp" src={index.url} 
                style={{width: "4rem", 
                        height: "4rem" ,
                        display: "block",
                        marginTop: "50%",
                        marginLeft: "15%"
                      }}/>
            </div>
            <div className="content">
                <h4>{index.date}</h4>
                    <h2>{index.pos}</h2>
                <p> {index.name}</p>
                <p> <FaMapMarkerAlt/>  {index.loc}        </p>
            </div>
        </div>
        </Bounce>
        )
    })}
        
</div>
</div>
    )
}
export default Experience;