const MyTeam = ({ myTeam }) => {
    return ( 
        <table className="myTeam">
            <thead>
                <tr>
                    <th>Name - Team</th>
                    <th>Position</th>
                    <th>Bye Week</th>
                </tr>
            </thead>
            <tbody>
                {myTeam.map((player) => (
                    <tr key={player.id}>
                        <td>{player.name} - {player.team}</td>
                        <td>{player.position}</td>
                        <td>{player.byeWeek}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default MyTeam;