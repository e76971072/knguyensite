import React from 'react';
import resumeData from './data/resumeData'
import Particle from './components/Particle'
import NavBar from './components/Navbar'
import Greeting from './components/Greeting'
import Loading from './components/Loading'
import Education from './components/Education'
import Experience from './components/Experience'
import resume from './data/resumeData';
import './App.css'
function App(props) {


  return (
    <div className="App"> 
      <Particle /> 
      <NavBar resumeData={resumeData.Header}  />
      <div id="containermiddle">
      <Greeting  resumeAbout= {resumeData.About} resumeName={resumeData.name}/> 
        {/* <Loading /> */}
        <Experience />
       <Education  resumeEducation={resumeData.Education}  resumeName={resumeData.name}/>
       </div>
    </div>
  );
}
export default App;
