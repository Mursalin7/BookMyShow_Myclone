import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieComponent({ title, poster, id }) {
  const [genre, setGenre] = useState("");
  useEffect(() => {
    axios
      .request(`http://www.omdbapi.com/?i=${id}&apikey=5b365c1a`)
      .then(response => response.data.Genre)
      .then(data => {
        setGenre(data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  return (
    <div
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
      className="movie"
    >
      <Link
        to={{
          pathname: `/movies/:${title}`,
          state: { name:title, url:poster }
        }}
        style={{ textDecoration:'none',color:'inherit'}}
      >
        <img
          src={poster}
          style={{ width: "200px", height: "250px", maxHeight: "100%" }}
          alt={title}
        />
        <h3 style={{ width: "200px", wordWrap: "break-word" }}>{title}</h3>
        <p style={{ width: "200px", wordWrap: "break-word" }}>{genre}</p>
      </Link>
    </div>
  );
}

export default MovieComponent;
