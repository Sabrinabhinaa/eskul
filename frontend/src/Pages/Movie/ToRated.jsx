import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../../Utils/constants/endpoint";
import MoviesContext from "../../context/MovieContext";

function TopRatedMovie() {

    // State untuk menyimpan data film
    const { setMovies } = useContext(MoviesContext);

    useEffect(() => {
        // Mendapatkan data film dengan rating tertinggi
        async function getTopRatedMovie() {
            const response = await axios(ENDPOINTS.TOP_RATED);
            console.log("Top Rated Movies Data:", response.data.results);
            setMovies(response.data.results);
        }

        getTopRatedMovie();
    }, [setMovies]);

    return (
        <div>
            <Hero />
            <Movies title="Top Rated Movies" />
        </div>
    );
}

export default TopRatedMovie;
