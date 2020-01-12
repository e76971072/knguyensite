import React from 'react'
import './Experience.scss'


// Experience Section

const Experience = () => {
    return (
    <div class="timeline-small">
    <div class="header">
        <div class="color-overlay">
            <div class="header-name">Timeline</div>
            <div class="header-sub">Work Experience</div>
        </div>
    </div>
    <div class="timeline-small-body">
        <ul>
            <li>
                <div class="bullet pink"></div>
                <div class="date">Jun 2015 to Jan 2017</div>
                <div class="desc">
                    <h3>On-site Network Support Engineer</h3>
                    <h4>OmniPrime Marketing, Inc.</h4>
                </div>
            </li>
            <li> 
                <div class="bullet orange"></div>
                <div class="date">Jan 2014 to May 2015</div>
                <div class="desc">
                    <h3>IT Support / Web Designer &amp; Developer</h3>
                    <h4>IT.Resources Corporation (ITRC)</h4>
                </div>
            </li>
            <li>
                <div class="bullet blue"></div>
                <div class="date">Nov 2012 to Oct 2014</div>
                <div class="desc">
                    <h3>OJT Graphic Artist / IT Support</h3>
                    <h4>Lima Gulf Industrial Trading</h4>
                </div>
            </li>
            <li>
                <div class="bullet green"></div>
                <div class="date">Oct 2006 to Present</div>
                <div class="desc">
                    <h3>Art Direction, Graphic Design, Web Development</h3>
                    <h4>Independent / Freelance</h4>
                </div>
            </li>
        </ul>
    </div>
</div>
    )
}

export default Experience;