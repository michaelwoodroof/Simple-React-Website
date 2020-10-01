import React from 'react';
import Profile from './Profile.js'
import './css/TextStyles.css';
import './css/Team.css'
import data from './assets/data/profiles/profiles.json'

function Team() {
    return (
        <div className="Content">
            <h1>The Team</h1>
            <div className="Staff">
                {data["profiles"].map( (obj) =>
                    <Profile name={obj.name} desc={obj.desc}/>
                )}
            </div>
        </div>
    )
}

export default Team;
