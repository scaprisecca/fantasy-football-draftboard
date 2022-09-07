import Players from '../data/players.json';
import styles from './PlayerList.module.css';
import { useEffect, useState } from 'react';

const PlayerList = ({players, draftPlayer, playerTaken}) => {
    const [searchTerm, setSearchTerm] = useState('');

    return ( 
        <div>
            {/* Search for players */}
            <input
                className={styles.searchBar}
                type="text" 
                placeholder="Search for Name, Position, or Team" 
                onChange={event => setSearchTerm(event.target.value)} 
            />
            
            {/* Table filters to only show players being searched */}
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableRow}>Drafted?</th>
                        <th className={styles.tableRow}>Position Rank</th>
                        <th className={styles.tableRow}>Name - Team</th>
                        <th className={styles.tableRow}>Position</th>
                        <th className={styles.tableRow}>Projected Points</th>
                        <th className={styles.tableRow}>ADP</th>
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
                        <tr key={player.id}>
                            <td className={styles.tableRow}>
                                <img className={styles.tableIcon} src="../../img/draft-checkmark.svg" alt="Draft Player" onClick={() => draftPlayer(player.id, 'drafted')}/>
                                <img className={styles.tableIcon} src="../../img/mark-drafted-x.svg" alt="Draft Player" onClick={() => playerTaken(player.id, 'taken')}/>
                            </td>
                            <td className={styles.tableRow}>{player.rank}</td>
                            <td className={styles.tableRow}>{player.name} - {player.team}</td>
                            <td className={styles.tableRow}>{player.position}</td>
                            <td className={styles.tableRow}>{player.projectedPoints}</td>
                            <td className={styles.tableRow}>{player.adp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default PlayerList;