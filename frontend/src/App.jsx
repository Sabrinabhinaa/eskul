import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CreateMovie from "./Pages/Movie/Create";
import Popular from "./Pages/Movie/Popular";
import NowPlaying from "./Pages/Movie/NowPlaying";
import TopRated from "./Pages/Movie/ToRated";
import Layout from "./Layout/index.jsx";
import { ThemeProvider } from "styled-components";
import theme from "../Utils/constants/theme.js";
import GlobalStyle from "./components/interfaces/GlobalStyle";
import Detail from "./Pages/Movie/Detail.jsx";
import data from "../Utils/constants/data.js";
import MoviesContext from "./context/MovieContext.jsx";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(data);
  const ContextValue = {
    movies,
    setMovies,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={ContextValue}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<Home movies={movies} />} />
              <Route path="/movie/create" element={<CreateMovie movies={movies} setMovies={setMovies} />} />
              <Route path="/movie/popular" element={<Popular />} />
              <Route path="/movie/now" element={<NowPlaying />} />
              <Route path="/movie/top" element={<TopRated />} />
              <Route path="/movie/:id" element={<Detail />} />
            </Routes>
          </Layout>
        </MoviesContext.Provider>
      </ThemeProvider >
    </>
  );
}

export default App;