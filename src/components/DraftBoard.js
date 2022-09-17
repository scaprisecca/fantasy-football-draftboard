import { useState } from "react";
import Teams from '../data/teams.json';
import '../App.css';

const DraftBoard = () => {
    const [teams, setTeams] = useState(Teams);
    const [draftRounds, setDraftRounds] = useState(17);
    
    function createDraftBoard() {
        // let table = [];
        // for (let i = 0; i < draftRounds; i++) {
        //     table.push(<tr></tr>)
        // }
        // return table;
        // let innerTable = [];
        // let outerTable = [];

        // for (let i = 0; i < teams.length; i++) {
        //     innerTable.push(<td>inside</td>)
        // }

        // for (let j = 0; j < draftRounds; j++) {
        //     outerTable.push(<tr></tr>)
        // }

        // return outerTable.push(innerTable);

    //     const board = document.querySelector('.draftboard');
    //     board.style.gridTemplateRow = ${draftRounds}fr;
    }


    return ( 
        // <table>
        //     <thead>
        //         <tr>
        //             {teams.map((team) => (
        //                 <th key={team.id}>{team.team_name}</th>
        //             ))}
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {/* {Array.from(draftRounds).map((round, index) => (
        //             <tr>
        //                 <td key={index}>{round}</td>
        //             </tr>
        //         ))} */}
        //         {createDraftBoard()}
        //     </tbody>
        // </table>

        <div className="draftboard">
            {createDraftBoard()}
        </div>
     );
}
 
export default DraftBoard;