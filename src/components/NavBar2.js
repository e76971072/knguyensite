import React from 'react'
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

function NavBar2 (props) {
    return (
        <Media queries={{ small: { minWidth: 700 } }}>
            <ul className="listNavBar" style={styles.ul}>
                <li onMousEnter={{color: "rgb(100,255,176)"}}style={styles.li}> <span>01.</span>About Me   </li>
                <li style={styles.li}>  <span>02.</span>Experience </li>
                <li style={styles.li}>  <span>03.</span> Hobbies </li>
                <li style={styles.li}>  
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