import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./Layout/index.jsx";
import DetailEskul from "./Pages/DetailEskul";

function App() {

  return (
    <Routes>

      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/eskul/:id"
          element={<DetailEskul />}
        />

      </Route>

    </Routes>
  );
}

export default App;