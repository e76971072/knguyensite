import React from 'react'
import Button from '@material-ui/core/Button'
import './NavBar2.css'
export default function NavBar2 (props) {
    const styles = 
    {
        ul: {
            width: "fit-content",
            float: "right",
        }, 
        button:{
            border: "0.5px solid rgb(100,255,218)"
        },
        li:{
            display: "inline-block",
            color: "honeydew",
            margin: "1rem", 
        }
    }
    return (
        <ul className="listNavBar" style={styles.ul}>
            <li style={styles.li}>  About Me   </li>
            <li style={styles.li}> Experience </li>
            <li style={styles.li}>  Hobbies </li>
            <li style={styles.li}>  <Button style={styles.button}> Resume </Button> </li>
        </ul>
    )
}