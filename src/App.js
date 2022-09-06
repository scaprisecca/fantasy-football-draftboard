import './App.css';
import PlayerList from './components/PlayerList';
import MyTeam from './components/MyTeam';
import Players from './data/players.json';
import {useState} from 'react';

function App() {

  const [availablePlayers, setAvailablePlayers] = useState(Players);
  const [myTeam, setMyTeam] = useState([]);
  const [draftStatus, setDraftStatus] = useState();

  function draftPlayer(id) {
      let myNewTeam = availablePlayers.filter(player => player.id === id);
      setMyTeam(myNewTeam);
      
      const newPlayerList = availablePlayers.filter(player => player.id !== id);
      setAvailablePlayers(newPlayerList);
  }
  
  function playerTaken(id) {
      const newPlayerList = availablePlayers.filter(player => player.id !== id);
      setAvailablePlayers(newPlayerList);
  }

  return (
    <div className="App">
      <PlayerList players={availablePlayers} myTeam={myTeam} draftPlayer={draftPlayer} playerTaken={playerTaken} />
      <MyTeam myTeam={myTeam} />
    </div>
  );
}

export default App;