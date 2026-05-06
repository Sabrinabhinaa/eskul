import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledDetailMovie from './DetailMovie.styled';
import Button from '../interfaces/Button';
// import ENDPOINTS from '../../../Utils/constants/endpoint';

function DetailMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState("");

    const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() => {
        async function getDetailMovie() {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
            const response = await axios(URL);
            setMovie(response.data);
        }

        getDetailMovie();
    }, [id]);

    return (
        <StyledDetailMovie>
            <div className="poster">
                <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                {trailer && (
                    <Button as="a" href={trailer} target="_blank">
                        Watch
                    </Button>
                )}
            </div>
        </StyledDetailMovie>
    );
}

export default DetailMovie;
