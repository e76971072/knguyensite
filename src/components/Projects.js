import  React,  {useEffect, useState} from 'react';
import BuildIcon from '@material-ui/icons/Build';
import GavelIcon from '@material-ui/icons/GavelTwoTone';
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import './Projects.css'
import Card from './Card'

export default function Projects (props) {
 
  
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
     <div id="containerProjects"className="containerProjects">
        <h3> 02.  
            <span> Some things I've  {'  '}
                <span className="things">
                 { words[current] }
                </span> 
            </span>  
        </h3>
        {Projects.map (index => {
          return(
            <Fade bottom duration={2000}> 
           <div className="containerCard">
               <p className="description">  
            <span className="titleProject">{index.name+'    '}</span>
           
              {index.description}
             <br/> <br/>
             <a href={index.git} target="_blank" rel="noopener noreferrer"><FaGithub  className="githubProject"/></a>
             <a href={index.web} target="_blank" rel="noopener noreferrer"><FaTelegram className="githubProject"/></a>
              </p> 
            
             
            <Card current={index} />
            <div className="iconMobile">
            <a href={index.git} target="_blank" rel="noopener noreferrer"><FaGithub  className="githubProject"/> </a>
            <a href={index.web} target="_blank" rel="noopener noreferrer"><FaTelegram className="githubProject"/></a>
            </div>
          </div>
          </Fade>
          )
        })}
    </div>
)

}