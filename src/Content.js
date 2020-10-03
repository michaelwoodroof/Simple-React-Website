import React from 'react';
import About from './About.js'
import Team from './Team.js'
import Achievements from './Achievements.js'
import Contact from './Contact.js'

function Content() {
    return (
        <div style={{width: "auto", marginRight: "auto", marginLeft: "auto", display: "inline"}}>
            <About />
            <Team />
            <Achievements />
            <Contact />
        </div>
    )
}

export default Content;
