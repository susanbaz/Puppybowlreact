import React from 'react';
import ReactDOM from 'react-dom/client';

const PlayerDetails=({player})=>{
    return(
        <div className="player-details">
            <h2>{player.name} Details</h2>
            <p>Owner:{player.owner}</p>
            <p>Team:{player.team}</p>
            <p>Breed:{player.breed}</p>
            <p>Status:{player.status}</p>
        </div>
    )
}
export default PlayerDetails;