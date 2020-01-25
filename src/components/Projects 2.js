import  React,  {useEffect, useState, useRef} from 'react';
import BuildIcon from '@material-ui/icons/Build';
import GavelIcon from '@material-ui/icons/GavelTwoTone';
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import './Projects.css'
import Card from './Card'

export default function Projects (props) {
 
  const styles = {
    containerCard : {
      marginBottom: "20%",
    }, 
    title: {
      color: "rgb(100, 255, 218)",
      fontFamily : "Times New Roman, Times, serif", 
      fontSize: "1.1em", 
    }, 
    description: {
      color: "rgb(136, 146, 176)", 
      backgroundColor: "rgb(23,37,59)", 
      fontSize: "1.1em", 
      position: "absolute", 
      fontFamily : "Times New Roman, Times, serif", 
      transform: "translate(90%, 80%)", 
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      padding: "2%", 
      width : "30%", 
   
    },
    icon : {
      fontSize: "2.5rem", 
    }
  }
    const Projects = props.projects
        const words = [
            'built', 
          <BuildIcon />,
          <  GavelIcon />  , 
        ]
        const [current, setCurrent] = useState(0)
        useEffect(() => {
          const interval = setInterval(() => {
            if (current === words.length - 1) {
              setCurrent(0)
            } else {
              setCurrent(current + 1)
            }
          }, 2000);
          return (() => {
            clearInterval(interval)
          })
        })
        
return (
     <div className="containerProjects">
        <h3> 02.  
            <span> Some things I've  {'  '}
                <span className="things">
                 { words[current] }
                </span> 
            </span>  
        </h3>
        {Projects.map (index => {
          return(
           <div className="containerCard">
            <p className="description">
            <span className="titleProject">{index.name+'    '}</span>
              {index.description}
             <br/> <br/>
             <FaGithub className="githubProject"/>
             <FaTelegram className="githubProject"/>
              </p> 
            <Card current={index} />
            <div className="iconMobile">
              <FaGithub  className="githubProject" />
              <FaTelegram className="githubProject"/>
            </div>
          </div>
          )
        })}
    </div>
)

}