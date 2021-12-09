import {Link} from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <div class="NavBar">
            <h2>The Planets</h2>
            <div class="PlanetLinks">
            <Link to="/">Earth</Link>
            <Link to="/venus">Venus</Link>
            <Link to="/mars">Mars</Link>
            <Link to="/jupiter">Jupiter</Link>
            <Link to="/saturn">Saturn</Link>
            <Link to="/uranus">Uranus</Link>
            <Link to="/neptune">Neptune</Link>
            </div>
        </div>

    )
}

export default NavBar