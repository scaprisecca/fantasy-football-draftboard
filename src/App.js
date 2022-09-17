import './App.css';
import PlayerList from './components/PlayerList';
import MyTeam from './components/MyTeam';
import Players from './data/players.json';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayerStats from './components/PlayerStats';
import DraftBoard from './components/DraftBoard';

function App() {

  const [availablePlayers, setAvailablePlayers] = useState(Players);
  const [myTeam, setMyTeam] = useState([]);
  const [draftStatus, setDraftStatus] = useState('available');

  function draftPlayer(id) {
    // Adds player to My Team
      const findPlayer = availablePlayers.find(player => player.id === id);
      if (findPlayer) {
        setMyTeam([...myTeam, findPlayer]);
      }
      
    // Removes the drafted play from the list of available players
      const newPlayerList = availablePlayers.filter(player => player.id !== id);
      setAvailablePlayers(newPlayerList);
  }
  
  function playerTaken(id) {
      const newPlayerList = availablePlayers.filter(player => player.id !== id);
      setAvailablePlayers(newPlayerList);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PlayerList players={availablePlayers} myTeam={myTeam} draftPlayer={draftPlayer} playerTaken={playerTaken} />} />

          <Route path="/myteam" element={<MyTeam myTeam={myTeam} />} />

          <Route path='/playerstats' element={<PlayerStats players={availablePlayers}  />} />
          <Route path='/draftboard' element={<DraftBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
