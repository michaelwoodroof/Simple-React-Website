import React from 'react';
import './css/Achievements.css';
import trophy from './assets/images/trophy.svg'

function Achievements() {
    return (
        <div className="Content">
            <h1>Achievements</h1>
            <div>
                <h1 className="Name">Achieve</h1>
                <img className="Trophy" src={trophy} alt="trophy"/>
                <div class="CircleBacker" />
            </div>
        </div>
    )
}

export default Achievements;
