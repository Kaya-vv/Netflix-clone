import "./App.css";
import React, { useState } from "react";
import movieTrailer from "movie-trailer";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";

function App() {
  const [trailerUrl, setTrailerUrl] = useState();

  const handleTrailer = (movieId) => {
    movieTrailer(null, { tmdbId: movieId, id: true }).then((response) =>
      setTrailerUrl(response)
    );
  };
  return (
    <div className="app">
      <Nav />
      <Banner trailerUrl={trailerUrl} handleTrailer={handleTrailer} />

      {Object.keys(requests).map(function (key, index) {
        return (
          <Row
            key={index}
            title={requests[key].title}
            fetchUrl={requests[key].fetch}
            isLargeRow
            handleTrailer={handleTrailer}
          />
        );
      })}
    </div>
  );
}

export default App;
