import React, {useState} from 'react'
import './Experience.css'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from './Title'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {FaMapMarkerAlt} from "react-icons/fa"
import styled, {keyframes} from 'styled-components'


import './Experience.css'

// Experience Section

const Experience = (props) => {
    const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
  
    to {
      transform: rotate(360deg);
    }
  `;
  const Rotate = styled.div`
    animation: ${rotate} 10s linear ;
  `; 
    const [hoverOne, setHoverOne] = useState (false)
   
 const handleHoverOne = (event) => {
    setHoverOne(!hoverOne);
   
 }
  const experience = props.experience
    return (
<div className="containerExperience">
<Title index={"03"} titleName={"Recent Work"}/>
<div  className="page-wrapper" >
    {experience.map( index =>{
            return (
            <Rotate>
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
        </Rotate>
            )
    })}
        
</div>
</div>
    )
}
export default Experience;