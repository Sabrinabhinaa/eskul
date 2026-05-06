import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../../Utils/constants/endpoint";
import MoviesContext from "../../context/MovieContext";

function PopularMovie() {
    const { setMovies } = useContext(MoviesContext);


    useEffect(() => {
        // Mendapatkan data film populer
        async function fetchPopularMovies() {
            // Use Endpoints Popular Movies
            const response = await axios(ENDPOINTS.POPULAR);
            setMovies(response.data.results);
        }
        fetchPopularMovies();
    }, [setMovies]);
    return (
        <div>
            <Hero />
            <Movies title="Popular Movies" />
        </div>
    );
}

export default PopularMovie;
