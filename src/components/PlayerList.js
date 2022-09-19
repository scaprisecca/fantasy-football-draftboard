import { useEffect, useState } from 'react';
import FilterButton from './FilterButton';

const PlayerList = ({players, draftPlayer, playerTaken}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return ( 
        <div>
            {/* Search for players */}
           <div className='filterContainer'>
                <input
                    className='searchBar'
                    type="text" 
                    placeholder="Search for Name, Position, or Team" 
                    onChange={event => setSearchTerm(event.target.value)} 
                />
                <div className='filterBtnContainer'>
                    <span className='filterLabel'>Position:</span>
                    <FilterButton data={players} filterBy={'position'} filterPlayers={value => setSearchTerm(value)} />
                    <span className='filterLabel'>Team:</span>
                    <FilterButton data={players} filterBy={'team'} filterPlayers={value => setSearchTerm(value)} />
                </div>
            </div> 
            
            {/* Table filters to only show players being searched */}
            <table className='table'>
                <thead>
                    <tr className='tableRow'>
                        <th className='tableHeading'>Drafted?</th>
                        <th className='tableHeading'>Position Rank</th>
                        <th className='tableHeading'>Name - Team</th>
                        <th className='tableHeading'>Position</th>
                        <th className='tableHeading'>Projected Points</th>
                        <th className='tableHeading'>ADP</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Filters for player being search */}
                    {players.filter((search) => {
                        if (searchTerm == '' || searchTerm == 'All') {
                            return search;
                        } else if (search.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || search.position.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || search.team.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return search;
                        }
                        }).map((player, id) => (
                        <tr key={player.id} className='tableRow'>
                            <td className='tableData'>
                                <img className='tableIcon' src="../../img/draft-checkmark.svg" alt="Draft Player" onClick={() => draftPlayer(player.id, 'drafted')}/>
                                <img className='tableIcon' src="../../img/mark-drafted-x.svg" alt="Draft Player" onClick={() => playerTaken(player.id, 'taken')}/>
                            </td>
                            <td className='tableData'>{player.rank}</td>
                            <td className='tableData'>{player.name} - {player.team}</td>
                            <td className='tableData'>{player.position}</td>
                            <td className='tableData'>{player.projectedPoints}</td>
                            <td className='tableData'>{player.adp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default PlayerList;