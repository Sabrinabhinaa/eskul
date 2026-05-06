import { Link } from "react-router-dom";
import StyledMovie from "./Movie.styled";

function Movie(props) {
    const { movie } = props;

    const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.release_date ? movie.release_date.split('-')[0] : 'Unknown';

    return (
        <StyledMovie>
            <img
                src={movie.poster || tmdbImage}
                alt={movie.title}
            />
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
                <p>{year}</p>
            </Link>
        </StyledMovie>
    );
}

export default Movie;
