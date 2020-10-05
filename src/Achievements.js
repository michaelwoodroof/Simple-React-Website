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
                    <Achievement key={obj.name} name={obj.name} desc={obj.desc}
                    month={obj.month} year={obj.year} />
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
                <h1 style={{fontSize: "12pt"}}>{this.props.name}</h1>
                <p style={{textAlign: "left"}}>{this.props.desc}</p>
                <p className="AchievementMonthYear">{this.props.month} {this.props.year}</p>
            </div>
        )
    }

}

export default Achievements;
