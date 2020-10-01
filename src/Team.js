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
                    <Profile key={obj.name} name={obj.name} desc={obj.desc}
                    twitter={obj.twitter} linkedin={obj.linkedin}/>
                )}
            </div>
        </div>
    )
}

export default Team;
