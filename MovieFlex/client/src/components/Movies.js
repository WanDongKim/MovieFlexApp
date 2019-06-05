import React, { Component } from "react";

class Movies extends Component {
  render() {
    return (
      <div className="movie-section">
        <h1>All Movies</h1>
        <div className="movies">
          <div className="movie-card">
            <div className="movie-poster card1" />
            <div className="movie-title">Avengers</div>
            <span className="movie-summary">Summary</span>
          </div>
          <div className="movie-card">
            <div className="movie-poster" />
            <div className="movie-title">Aaa</div>
            <span className="movie-summary">Summary</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
