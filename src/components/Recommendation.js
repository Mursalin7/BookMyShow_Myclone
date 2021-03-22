import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import "../css/Recommendation.css";
import axios from "axios";

function Recommendation() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .request("http://www.omdbapi.com/?s=avengers&apikey=5b365c1a")
      .then(response => response.data.Search)
      .then(data => {
        console.log(data);
        setMovieList(data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="recom">
     <div>
      <h3 className="head">Recommended Movies</h3>
      </div>
      <div className="movieList">
        {movieList && movieList.map((movie,index) => (
          <MovieComponent key={index} title={movie.Title} poster={movie.Poster} id={movie.imdbID} />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
