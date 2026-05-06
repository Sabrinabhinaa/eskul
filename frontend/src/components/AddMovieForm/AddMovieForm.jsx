// AddMovieForm.jsx
import { nanoid } from "nanoid";
import { useState } from "react";
import Styles from "./AddMovieForm.module.css";
import Button from "../interfaces/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MoviesContext from "../../context/MovieContext.jsx";
import StyledAddMovie from "./AddMovie.styled";

function AddMovieForm() {
    const navigate = useNavigate();

    // destructuring props
    const { movies, setMovies } = useContext(MoviesContext);
    // membuat state object
    const [formData, SetFormData] = useState({
        title: "",
        year: "",
    });

    // membuat state  error
    const [errors, setIsError] = useState({
        title: false,
        year: false,
    });

    // destructuring formData
    const { title, year } = formData;

    // membuat function handle change
    function handleChange(e) {
        const { name, value } = e.target;
        SetFormData({
            ...formData,
            [name]: value,
        });
    }

    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: year,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };
        setMovies([...movies, movie]);


        // kembali ke halaman home
        navigate("/");
        // set error menjadi false
        setIsError({
            title: false,
            year: false,
        });
    }

    function validate() {
        // validasi melacak error
        const newErrors = {
            title: false === "",
            year: false === "",
        };

        // set error
        setIsError(newErrors);

        // mengembalikan status validasi
        return !newErrors.title && !newErrors.year;
    }

    function handleSubmit(e) {
        e.preventDefault();
        // jika validate bernilai true, maka jalankan function addMovie
        validate() && addMovie();
    }

    return (
        <StyledAddMovie>
            <section>
                <div className={Styles.formleft}>
                    <img
                        className={Styles.image}
                        src="https://picsum.photos/536/354"
                        alt="placeholder"
                    />
                </div>

                <div className={Styles.formRight}>
                    <h2>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                name="title"
                                onChange={handleChange}
                            />
                            {errors.title && <p>{errors.title}</p>}
                        </div>
                        <div className="formGroup">
                            <label htmlFor="year">Year</label>
                            <input
                                id="year"
                                type="number"
                                value={year}
                                name="year"
                                onChange={handleChange}
                                className={Styles.formInput}
                            />
                            {errors.year && <p>{errors.year}</p>}
                        </div>
                        <div>
                            <Button variant="secondary">Add Movie</Button>
                        </div>
                    </form>
                </div>
            </section>
        </StyledAddMovie>
    );
}

export default AddMovieForm;
