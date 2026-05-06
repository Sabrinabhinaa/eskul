import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../../Utils/constants/endpoint";
import MoviesContext from "../../context/MovieContext";

function NowPlayingMovie() {

    const { setMovies } = useContext(MoviesContext);

    useEffect(() => {
        async function getNowPlayingMovie() {
            const response = await axios(ENDPOINTS.NOW_PLAYING);
            console.log("Now Playing Movies Data:", response.data.results);
            setMovies(response.data.results);
        }
        getNowPlayingMovie();
    }, [setMovies]);

    return (
        <div>
            <Hero />
            <Movies title="Now Playing" />
        </div>
    );
}

export default NowPlayingMovie;
