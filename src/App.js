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
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        handleTrailer={handleTrailer}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Trending"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Bekroonde misdaadfilms "
        fetchUrl={requests.fetchCrimeShows}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Actie"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Romantiek"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        handleTrailer={handleTrailer}
        title="Documentaires"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
