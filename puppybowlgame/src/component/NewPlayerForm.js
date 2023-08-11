import React, { useState } from 'react';

function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('bench');
  const [imageUrl, setImageUrl] = useState('');

  const cohortName = '2302-ACC-PT-WEB-PT-C';
  const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

  const handleSubmit = event => {
    event.preventDefault();
    const newPlayer = {
      name,
      breed,
      status,
      imageUrl,
    };

    console.log('New player:', newPlayer);

    fetch(APIURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayer),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        // Clear form fields after successful creation
        setName('');
        setBreed('');
        setStatus('bench');
        setImageUrl('');
      })
      .catch(error => {
        console.error('Error creating new player:', error);
      });
  };

  return (
    <div className="new-player-form">
      <h2>Create New Player</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        {/* Breed */}
        <label htmlFor="breed">Breed:</label>
        <input
          id="breed"
          type="text"
          value={breed}
          onChange={event => setBreed(event.target.value)}
        />
        {/* Status */}
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={event => setStatus(event.target.value)}
        >
          <option value="bench">Bench</option>
          <option value="field">Field</option>
        </select>
        {/* ImageUrl */}
        <label htmlFor="imageUrl">Image Url:</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
        />

        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
