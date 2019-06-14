import React, { Component } from "react";
import axios from "axios";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      movies: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=005c2dfe9e66fb2c377f35ac409b86d7"
      )
      .then(result =>
        this.setState({
          result,
          movies: result.data.results
        })
      );
    console.log("Did mount");
  }
  render() {
    return (
      <div className="movie-section">
        <h1>All Movies</h1>
        <div className="movies">
          {this.state.movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div
                className="movie-poster"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w500${
                    movie.poster_path
                  }")`
                }}
              />
              <div className="movie-title">{movie.title}</div>
              <span className="movie-summary">
                {movie.overview.substring(0, 30)}...
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
