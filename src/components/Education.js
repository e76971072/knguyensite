import React from 'react'
import './Education.css'



const Education = (props) => {
    const education = props.resumeEducation
    const name = props.resumeName
return (
    <div className="containerEducation">
        <h2> Hi, My name is {name} </h2>
    </div>
    )
}

export default Education; 