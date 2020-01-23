import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import {FaRegFilePdf} from "react-icons/fa"
import './NavBar2.css'
import Media from 'react-media'

const styles = 
    {
        ul: {
            width: "fit-content",
            float: "right",
            
        }, 
        button:{
            border: "0.5px solid rgb(100,255,218)",
            color: "rgb(100,255,218)", 
            
        },
        li:{
            display: "inline-block",
            color: "rgb(136, 146, 176)",
            margin: "1rem", 
            fontFamily:"'FuturaPT', Helvetica, Arial, sans-serif",
            fontWeight: "300", 
        }
    }
const handleWindowScroll =  ( event ) =>{

    if (event.currentTarget.id === 'one'){
        handleScroll(null)
    }
    if (event.currentTarget.id === 'two'){
        handleScroll('containerExp')
    }
    if (event.currentTarget.id === 'three'){
        handleScroll('containerProjects')
    }
    if (event.currentTarget.id === 'four'){
        handleScroll('containerExp')
    }
}

const handleScroll = (name) => {
    return (name != null ?  window.scrollTo({
        top: document.getElementById(name).offsetTop,
        behavior: 'smooth'
      }) : null)
}


function NavBar2 (props) {
   
    // window.addEventListener('scroll', handleScroll)
    
    return (
        <Media queries={{ small: { minWidth: 700 } }}>
            <ul className="listNavBar" style={styles.ul}>
                <li onClick= {(event) => handleWindowScroll(event)} id="one" 
                    onMousEnter={{color: "rgb(100,255,176)"}}
                   > 
                    About Me   
                </li>
                <li onClick= {(event) => handleWindowScroll(event)} id="two" > Experience </li>
                <li onClick= {(event) => handleWindowScroll(event)} id="three" > Projects</li>
                <li onClick= {(event) => handleWindowScroll(event)} id="four" >  
                    <Button 
                        style={styles.button}
                        href="https://drive.google.com/file/d/1hG2hO3QGnRroUjmOg8VJSGgrvOaKL56G/view?usp=sharing"
                        target="_blank"> 
                        Résumé&nbsp;&nbsp; <FaRegFilePdf /> 
                     </Button>
                </li>
            </ul>
       </Media>
    )
}
export default NavBar2; 