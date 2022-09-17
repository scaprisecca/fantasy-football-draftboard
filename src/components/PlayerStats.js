import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../App.css';
// TODO - add list of players and more stat info (can I reuse playerlist component somehow?)

const PlayerStats = ({ players }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [comparePlayer, setComparePlayer] = useState([]);


// TODO - how to select players for comparision - update state to add them to a list?
    function selectPlayerToCompare(id) {
        const findPlayer = players.find(player => player.id === id);
        if (findPlayer) {
            console.log('null')
            setComparePlayer([...comparePlayer, findPlayer])
        }
    }

    return ( 
        <div>
            {/* Search for players */}
            <input
                className='searchBar'
                type="text" 
                placeholder="Search for Name, Position, or Team" 
                onChange={event => setSearchTerm(event.target.value)} 
            />
            
            {/* Table filters to only show players being searched */}
            <table className='table'>
                <thead>
                    <tr className="tableRow">
                        <th className="tableHeading">Compare</th>
                        <th className='tableHeading'>Position Rank</th>
                        <th className='tableHeading'>Name - Team</th>
                        <th className='tableHeading'>Position</th>
                        <th className='tableHeading'>Projected Points</th>
                        <th className="tableHeading">Bye Week</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Filters for player being search */}
                    {players.filter((search) => {
                        if (searchTerm == '') {
                            return search;
                        } else if (search.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return search;
                        }
                    }).map((player, id) => (
                        <tr key={player.id} className='tableRow'>
                            <td className="tableData">
                                <input 
                                    type="checkbox"
                                    name="compare-player"
                                    checked="false"
                                    onClick={() => selectPlayerToCompare(player.id)}
                                />
                            </td>
                            <td className='tableData'>{player.rank}</td>
                            <td className='tableData'>{player.name} - {player.team}</td>
                            <td className='tableData'>{player.position}</td>
                            <td className='tableData'>{player.projectedPoints}</td>
                            <td className="tableData">{player.byeWeek}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default PlayerStats;
