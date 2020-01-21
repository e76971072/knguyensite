import React from 'react';
import resumeData from './data/resumeData'
import Particle from './components/Particle'
import NavBarMobile from './components/Navbar'
import Greeting from './components/Greeting'
import Loading from './components/Loading'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Navbar from './components/NavBar2'
import resume from './data/resumeData';
import './App.css'
function App(props) {

  return (
    <div className="App"> 
      <Particle /> 
      <Navbar />
      {/* <NavBarMobile style={{display: "none"}} resumeData={resumeData.Header}  /> */}
      <div id="containermiddle">
      <Greeting  resumeAbout= {resumeData.About} resumeName={resumeData.name} resumeEmail= {resumeData.email}/> 
        <Projects  projects={resumeData.Project} />
        <Experience experience={resumeData.experience}/>
       </div>
    </div>
  );
}
export default App;
