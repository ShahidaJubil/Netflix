import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/Constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setMovie(
          response.data.results.sort(function (a, b) {
            return 0.5 - Math.random();
          })[0]
        );
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <p className="description">{movie ? movie.overview : ""}</p>
        <div className="banner_button">
          <button className="play">
            Play <i class="fa fa-play" aria-hidden="true"></i>
          </button>
          <button className="info">
            <i class="fa fa-info-circle" aria-hidden="true"></i> More Info{" "}
          </button>
        </div>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
