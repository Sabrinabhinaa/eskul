import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../../Utils/constants/endpoint";

function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getRecommendedMovies() {
            const response = await axios(ENDPOINTS.GET_RECOMMENDATIONS(id));
            setMovies(response.data.results);
        }
        getRecommendedMovies();

    }, [id]);

    return (
        <>
            <DetailMovie />
            <Movies movies={movies} />
        </>
    );
}

export default Detail;
