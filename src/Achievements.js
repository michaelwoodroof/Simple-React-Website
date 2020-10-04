import React from 'react';
import './css/Achievements.css';
import trophy from './assets/images/trophy.svg'
import data from './assets/data/achievements/achievements.json'

function Achievements() {
    return (
        <div className="Content">
            <h1>Achievements</h1>
            <div className="Achievements">
                {data["achievements"].map( (obj) =>
                    <Achievement key={obj.name} desc={obj.desc} />
                )}
            </div>
        </div>
    )
}

class Achievement extends React.Component {

    render() {
        return (
            <div className="Container">
                <div class="CircleBacker">
                    <img className="Trophy" src={trophy} alt="trophy"/>
                </div>
                <p className="AchievementDesc">{this.props.desc}</p>
            </div>
        )
    }

}

export default Achievements;
