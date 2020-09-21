import React from 'react'
import { FaJava ,FaReact , FaPython, FaDatabase, FaMailBulk,  FaExternalLinkAlt } from "react-icons/fa";
import covid from './img/project-covid.png'
import PL from './img/PL.png'
const  resume = {
    "Header":["About", "Education", "Hobbies", "Experience", "Skills", "Contact" ], 
    "About": "You can call me Fullsnack or Software Engineer ", 
    "name": " Kevin Nguyen", 
    "title": "Software Engineer", 
    "titleProject": "Something I've built with ", 
    "email": "an.nguyen1197@gmail.com", 
    "Social-media" :[
         {
             "name": "Linkedin", 
             "url": "https://www.linkedin.com/in/kevin-nguyen-222904127/", 
         }
         ,
         {
             "name": "Github", 
             "url": "https://www.github.com/e76971072"
         }
         , 
         {
             "name": "Spotify", 
             "url": "https://open.spotify.com/user/e769710?si=4P4aoD6ARDaDVZDHJwS-4w"
         }
    ], 
    "Project": [
        {
            "name": "Trade Smarter", 
            "iconForName": <FaExternalLinkAlt/> , 
            "lan": [{"name":"ReactJS", "icon": <FaReact />}, {"name":"Python", "icon": <FaPython />}, {"name": "MongoDB", "icon": <FaDatabase /> }], 
            "web": "https://github.com/e76971072/Trade-Smarter-Platform", 
            "git": "https://github.com/e76971072/Trade-Smarter-Platform", 
            "description": " is a Platform to help retail and stock traders to test out their strategy and assessing risk/reward before entering a trade", 
            "url":  PL , 
        }, 
        {
            "name": "Covid19 Tracker", 
            "iconForName": <FaExternalLinkAlt/> , 
            "lan": [{"name":"ReactJS", "icon": <FaReact />}, {"name":"Python", "icon": <FaPython />}, {"name": "MongoDB", "icon": <FaDatabase /> }], 
            "web": "https://covid19-frontend-284821.uc.r.appspot.com/", 
            "git": "https://github.com/e76971072/COVID-19-SPREAD", 
            "description": "is an application to keep track of covid19 spread throughout global and USA", 
            "url":   covid , 
        }, 
        {
            "name": "RowdyMart", 
            "iconForName": <FaExternalLinkAlt/> , 
            "lan": [{"name":"ReactJS", "icon": <FaReact />}, {"name":"Python", "icon": <FaPython />}, {"name": "PhpMySQL", "icon": <FaDatabase /> }], 
            "web": "http://grocery-front-end.herokuapp.com/", 
            "git": "https://github.com/e76971072/RowdyCart-User-Interface", 
            "description": "is a one-stop grocery shop containing a catalog of grocery items to fit your everyday needs. We also aim to help UTSA students stay healthy", 
            "url": "https://github.com/e76971072/RowdyCart-User-Interface/blob/master/img/Cart-checkout-view.png?raw=true", 
        }, 
        {
            "name": "PottyPicker",
            "iconForName": <FaExternalLinkAlt/> , 
            "lan": [ 
                {"name": "Java", "icon": <FaJava />}, {"name":"Javafxml"},{"name":"JavaMail API", "icon": <FaMailBulk />}], 
            "web": "", 
            "git": "https://github.com/UTSA-CS-3443/PotTYpicker", 
            "description": " is your go-to application for user rated reviews on the best and the worst bathrooms. Students can let the janitorial staffs or school knows if the bathroom needs certain improvements", 
            "url": "https://github.com/UTSA-CS-3443/PotTYpicker/blob/master/image/Login_Controller.png?raw=true"
        }, 
        {
            "name": "Hello, Sarah ",
            "iconForName": <FaExternalLinkAlt/> , 
            "lan": [ 
                {"name":"Python", "icon": <FaPython />}], 
            "web": "", 
            "git": "https://github.com/e76971072/AI-Assistant", 
            "description": " is a simple AI project to create ease of use for all. Some functionalities, include transcribing audio to text, personal assistance for call and message , or for ordering pizza.", 
            "url": "https://github.com/e76971072/AI-Assistant/raw/master/image/Example.png"
        }, 
        
        
    ], 
    "Education" : "University of Texas at San Antonio", 
    "experience": [
        {
            "name": "Self-Employed",
            "pos": "Derivatives Trader", 
            "web": "", 
            "key":"one", 
            "date": "Nov 2016 - Present", 
            "url": "https://image.flaticon.com/icons/svg/2620/2620564.svg", 
            "desc": [
                {"task":"Working on various projects"}
        ],   
            "lan": "Java",
            "loc": "San Antonio, Texas"
        }, 
        {
            "name": "FreeLance",
            "pos": "FreeLance", 
            "web": "", 
            "key":"one", 
            "date": "Nov 2019 - Present", 
            "url": "https://image.flaticon.com/icons/svg/1807/1807705.svg", 
            "desc": [
                {"task":"Working on various projects"}
        ],   
            "lan": "Java",
            "loc": "San Antonio, Texas"
        }, 
        {
            "name": "Poly, Inc",
            "pos": "Software Engineer Intern",
            "web": "https://www.polycom.com/", 
            "key":"two",
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQow_rbxf8KTdaJl7qTqBDyIade-oZdZD2jKhXQ9X5jrxgAfC0G",
            "date": "June 2019 - August 2019", 
            "desc": [
                    {'task':"Developed and implemented User Graphical In/>tion tool in C#."}, 
                    {'task':"Implemented conversion of xml format file in Python."}, 
                    {'task':"Embraced the AgileScrum development methodology."}
                ],  
            "lan": "Python", 
            "loc": "Austin, Texas"
        },
        {
            "name": "GPM Life Insurance", 
            "pos": "Software Programmer Intern", 
            "web": "https://www.gpmlife.com/wps/portal", 
            "key":"three",
            "url": "https://pbs.twimg.com/profile_images/917488294077669376/uzFoPVid_400x400.jpg", 
            "date": "February 2019 - June 2019", 
            "desc": [
                {"task":"Assisted the senior developer in maintaining and developing company’s Databases, web server."}, 
                {"task":" Designed and Implemented tools to assist with data."}
            ], 
            "lan": "Java",
            "loc": "San Antonio, Texas"
        }, 
       
    ], 

}


export default resume; 