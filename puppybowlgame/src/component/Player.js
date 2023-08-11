import React from 'react';


function Player({player,onDelete,onSeedetails}){
    const handleDeleteClick=()=>{
        onDelete(player.id);
    }
    const handleSeeDetailsClick=()=>{
        onSeedetails(Player.id);
    }

    return(
        <div className="player">
        <img src={player.imageUrl} alt={player.name} />
            <h3>{player.name}</h3>
            <p>Breed:{player.breed}</p>
            <p>Status:{player.status}</p>
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={handleSeeDetailsClick}>See Details</button>
        </div>
    )
}
export default Player;