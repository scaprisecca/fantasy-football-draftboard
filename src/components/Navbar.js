import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/draftboard" className="navbar-item">Draft Board</Link>
                <Link to="/MyTeam" className="navbar-item">My Team</Link>
                <Link to="/PlayerStats" className="navbar-item">Player Stats</Link>
            </nav>
        </header>
     );
}
 
export default Navbar;
