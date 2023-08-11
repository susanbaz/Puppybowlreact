import React, { useState } from 'react';
import Player from './component/Player';

function FilteredPlayerList({ players, searchQuery }){
  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredPlayers.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default FilteredPlayerList;
