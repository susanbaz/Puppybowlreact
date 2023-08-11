import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import Player from './Player';
import '../styles.css';


function PlayerList() {
  const [players, setPlayers] = useState([]);
  // const history = useHistory();
  const cohortName = '2302-ACC-PT-WEB-PT-C';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

 

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(APIURL);
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const result = await response.json();
        setPlayers(result.data.players);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchPlayers();
  }, [APIURL]);

  const handleDeletePlayer = (playerId) => {
    // Code to delete the player with the given playerId
    const newPlayers = players.filter(player => player.id !== playerId);
    setPlayers(newPlayers);
   
  };

  // const handleSeeDetails = (playerId) => {
  //   // Code to navigate to the details page for the player with the given playerId
  //   history.push(`/player/${playerId}`);
  // };

  if (!players.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h5>Puppy Bowl Players</h5>
      <div className='player-list'>
        {players.map(player => (
          <Player 
            key={player.id} 
            player={player}
            onDelete={() => handleDeletePlayer(player.id)}
            // onSeeDetails={() => handleSeeDetails(player.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default PlayerList;
