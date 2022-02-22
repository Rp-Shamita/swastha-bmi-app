import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h2>SWASTHA</h2>
            <title>SWASTHA</title>
        <Link className="links" to="/">Home</Link>
        </div>
     );
}
 
export default Navbar;