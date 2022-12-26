import React, { useEffect, useState } from "react";
import "./Poster.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/Constants";
import Youtube from "react-youtube";

function Poster(props) {
  const [poster, setPoster] = useState([]);
  const [urlid, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setPoster(response.data.results);
      })
      .catch((err) => {
        alert("Warning");
      });
  });

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Empty array");
        }
      });
  };

  return (
    <div className="posters">
      <h2>{props.title}</h2>
      <div className="posterdiv">
        {poster.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
            className={props.isSmall ? "smallposter" : "poster"}
          />
        ))}
      </div>
      {urlid && <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  );
}

export default Poster;
