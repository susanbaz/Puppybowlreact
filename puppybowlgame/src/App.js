import React from 'react';
import './App.css';
import PlayerList from './component/PlayerList';
import NewPlayerForm from './component/NewPlayerForm';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Puppy Bowl App</h1>
      </header>
      <main>
        <section>
          <NewPlayerForm />
        </section>
        <section>
          <SearchBar />
          <PlayerList />
        </section>
        <section>
          {/* <PlayerList /> */
          /* <FilteredPlayerList /> */
        }
        </section>
      </main>
    </div>
  );
}

export default App;