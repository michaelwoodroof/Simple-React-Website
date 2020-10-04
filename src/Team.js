import React from 'react';
import './css/TextStyles.css';
import './css/Team.css'
import './css/Profile.css'
import data from './assets/data/profiles/profiles.json'
import placeholder from './assets/images/placeholder.svg'
import twitter from './assets/images/twitter.svg'
import linkedin from './assets/images/linkedin.svg'

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

class Profile extends React.Component {

    render() {
        return (
            <div className="Container">
                <img src={placeholder} className="HeadShot" alt="placeholder"/>
                <h1 className="Name">{this.props.name}</h1>
                <p className="Desc">{this.props.desc}</p>
                <div className="Socials">
                    <a href={this.props.twitter}><img src={twitter} className="Social" alt="twitter" /></a>
                    <a href={this.props.linkedin}><img src={linkedin} className="Social" alt="linkedin" /></a>
                </div>
            </div>
        )
    }

}

export default Team;
