import React from 'react';
import './App.css';
import Roster from './Roster';
import MoneyForm from './MoneyForm';
import { TeamStoreProvider } from './TeamStore';
import Athlete from './Athlete';
import TeamInfo from './TeamInfo';

const lebronJames = new Athlete("Lebron James", 37, 5)
const stephCurry = new Athlete("Steph Curry", 34, 4)

function getPlayersFromBackend(): Athlete[] {
  return [lebronJames, stephCurry]
}

function App() {
  const players = getPlayersFromBackend();

  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={players}>
          <TeamInfo />
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
