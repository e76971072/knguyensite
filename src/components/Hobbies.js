import React from 'react'
import Title from './Title'
import  './Hobbies.css'
import Activity from './ActivitiesCard'
const Hobbies = () => {

    return (
     <div className="containerHobbies"> 
        <Title index={"04"} titleName={"Hobbies"} />   
        <Activity />
     </div>
    ); 
}
export default Hobbies; 