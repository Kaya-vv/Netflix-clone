import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import movieTrailer from "movie-trailer";

function Banner({ trailerUrl, handleTrailer }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0,
      autoplay: 1,
    },
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
         "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
       )`,
        backgroundPosition: "top",
      }}
    >
      {trailerUrl ? (
        <YouTube
          containerClassName={"player"}
          videoId={trailerUrl}
          opts={opts}
        />
      ) : (
        <>
          <div className="banner__contents">
            <h1 className="banner__title">
              {/* ? means if error then handle it and go next*/}
              {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className="banner__buttons">
              <button
                onClick={() => handleTrailer(movie.id)}
                className="banner__button"
              >
                Play
              </button>
              <button className="banner__button">My List</button>
            </div>

            <h1 className="banner__description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </>
      )}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
