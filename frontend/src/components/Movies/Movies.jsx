import Movie from "../Movie/Movie.jsx";
import { nanoid } from "nanoid";
import StyledMovies from "./movies.syled.js";
import { useContext } from "react";
import MoviesContext from "../../context/MovieContext.jsx";
import Button from "../interfaces/Button/index.jsx";

function Movies({ title }) {
    // Use movie context and get context value
    const { movies, setMovies } = useContext(MoviesContext);

    // membuat fungsi addMovie
    function addMovie() {
        const movie = {
            id: nanoid(4),
            title: "Jigsaw",
            year: 2021,
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        };

        setMovies([...movies, movie]);
    }

    return (

        <StyledMovies>
            <section>
                <h2>{title || "Latest Movies"}</h2>
                <div>
                    {movies.map(function (movie) {
                        return <Movie key={movie.id} movie={movie} />
                    })}
                </div>
                <Button onClick={addMovie}>Add Movie</Button>
            </section>
        </StyledMovies>

    )
}

export default Movies;
