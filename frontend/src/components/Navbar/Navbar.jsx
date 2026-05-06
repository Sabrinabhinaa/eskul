import { Link } from "react-router-dom";
import StyledNavbar from './navbar.syled';

function Navbar() {
    return (
        <StyledNavbar>
            <nav>
                <div>
                    <h1>
                        Movie Ap
                    </h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie/create">addMovie</Link>
                        </li>
                        <li>
                            <Link to="movie/popular">popular</Link>
                        </li>
                        <li>
                            <Link to="/movie/now">Now Playing</Link>
                        </li>
                        <li>
                            <Link to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
    )
}

export default Navbar;