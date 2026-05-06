import axios from "axios";
import Button from "../interfaces/Button";
import { useState, useEffect } from "react";
import ENDPOINTS from "../../../Utils/constants/endpoint";
import StyledHero from "./Hero.styled";

function Hero() {
    const [movie, setMovie] = useState({});
    const [trailerLink, setTrailerLink] = useState("");

    useEffect(() => {
        async function fetchTrendingMovie() {
            const response = await axios(ENDPOINTS.TRENDING);
            const firstMovie = response.data.results[0];
            return firstMovie;
        }

        async function fetchMovieDetails(movieId) {
            try {
                const response = await axios(ENDPOINTS.FETCH_MOVIE_DETAILS(movieId));
                const movieDetails = response.data;

                setMovie(movieDetails);

                if (movieDetails.videos?.results?.length > 0) {
                    const youtubeTrailer = movieDetails.videos.results.find(
                        video => video.site === 'YouTube' && video.type === 'Trailer'
                    );
                    if (youtubeTrailer) {
                        setTrailerLink(`https://www.youtube.com/watch?v=${youtubeTrailer.key}`);
                    }
                }
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }

        async function fetchData() {
            const trendingMovie = await fetchTrendingMovie();
            if (trendingMovie) {
                fetchMovieDetails(trendingMovie.id);
            }
        }

        fetchData();
    }, []); // Kosong agar hanya dijalankan sekali saat komponen dimuat

    const { title = "Title not available", genres = [], overview = "Description not available", backdrop_path } = movie;

    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2>{title}</h2>
                    <h3>
                        Genre: {genres.map(genre => genre.name).join(", ")}
                    </h3>
                    <p>{overview}</p>
                    {trailerLink ? (
                        <Button onClick={() => window.open(trailerLink, '_blank')}>Watch Trailer</Button>
                    ) : (
                        <Button disabled>No Trailer Available</Button>
                    )}
                </div>

                <div className="hero__right">
                    <img
                        src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path}` : ''}
                        alt="Movie backdrop"
                    />
                </div>
            </section>
        </StyledHero>
    );
}

export default Hero;
