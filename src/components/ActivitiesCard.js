import React from 'react'
import './ActivitiesCard.css'
import image01 from  '../data/img/Canon-hackathon.jpg'
export default function ActivitiesCard (props) {




        return (
                <div className="containerActivity">
                    <div className="containerPicture">
                        <img alt="image-1" src= {image01} />
                       <span>  
                        <h1> hackathon </h1>      
                      </span>
                    </div>
                </div>


            )


}