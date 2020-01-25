import React, {useState} from 'react'
import './Experience.css'
import { createMuiTheme, ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import Title from './Title'
import Button from '@material-ui/core/Button';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {FaCalendarAlt,FaMapMarkerAlt , FaAngleRight} from "react-icons/fa"
// Experience Section

const Experience = (props) => {
    const [alignment, setAlignment] = React.useState({
        array: {
            1: false,
            2: false,
            3: false
        }
    })
     
    const styles  = {
        ToggleContainer:{
            Button: {
                    background: "transparent",
                    display: "block",
                    margin: "1rem",
                    border: "1px solid gray",
                    width: "fit-content", 
            }, 
            ToggleButtonGroup:{
                background:"transparent",  
                display: "block",
            },
        },
        divShowTask: {
            container: {
                background: "rgb(33,45,57)",
              
            },
            li :{
                display: "block",
                color: "honeydew"
            },
            title: {
                fontSize: "1rem",
                width: "fit-content",
                display: "block", 
               
               
            }
        },
    }
    const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleNewArray = (event) => {
      console.log(alignment)
      var integer = parseInt(event.target.value, 10);
        setAlignment ({
            ...alignment,
            array:{
                integer: !alignment.array.integer
            }
        }
    )
    console.log(alignment)
  }; 
  const experience = props.experience
    return (
        <div className="containerExperience">
        <Title  index={"03. "} titleName={"Where I've worked"} />
        <ToggleButtonGroup
            style={styles.ToggleContainer.ToggleButtonGroup}
            value={alignment}
            exclusive
           
            >
            {experience.map(index => {
                return (
               <>
                
                <div className="collapse" style={styles.divShowTask.container} >
                <Button  
                    style={styles.ToggleContainer.Button} 
                    value={index.key} 
                    href={index.web}
                    target="_blank"
                    onClick={(event) => handleNewArray(event)}> 
                    {index.name} 
                </Button>
                    <div style={{ width: "100%",  float: "right", borderBottom: "0.5px solid gray"}}>
                       
                            <h3 style={{width:"fit-content", float: "left", marginLeft: "2rem"}}> {index.pos}  </h3>
                        <div style={{width:"fit-content", float:"right",marginRight: "2rem"}}>
                            <h3 style={styles.divShowTask.title}> <FaCalendarAlt /> &nbsp;{index.date} </h3>
                          
                            <h3 style={styles.divShowTask.title}> <FaMapMarkerAlt /> {index.loc}  </h3>
                     
                        </div>
                    </div>
                    <ul style={{borderTop: "0.5px solid gray"}} >
                        {
                            index.desc.map((i) => {
                                return (
                                <li style={styles.divShowTask.li}> <FaAngleRight />{i.task} </li>
                                )
                            })
                        }
                    </ul>
                </div>
                </>
                )
            })}
           </ToggleButtonGroup>
           </div>
    )
}
export default Experience;