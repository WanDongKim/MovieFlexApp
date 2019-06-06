import React, { Component } from "react";
import axios from 'axios';
class Movie extends Component {
  constructor(props){
    super(props);
    this.state ={
      result: null,
      movies: [],
      movie: Array,
      title: String
    };
  }

  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=005c2dfe9e66fb2c377f35ac409b86d7')
      .then(result => this.setState({
        result, 
        movies: result.data.results,
        movie: result.data.results[0]
      }));
      console.log("Did mount");

  }

  render(){
    console.log(this.state.movies)
    

    return (
      <div className="movie-section">
        <h1>All Movies</h1>
         <div className="movies">
          {this.state.movies.map((movie, index) => (

            <div className="movie-card">
              <div className="movie-poster" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`}}/>
              <div className="movie-title">Avengers</div>
              <span className="movie-summary">Summary</span>
            </div>
          ))}
        </div>
      </div>
    );
    // return(
    //   <div className="movie-card">
    //     {this.state.movies.map(function(movie){
    //       const posterStyle ={
    //         backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`
    //       };
    //       return (
    //         <div>
    //           <div className="movie-poster" style={posterStyle} />
    //           <div className="movie-title">Avengers</div>
    //           <span className="movie-summary">Summary</span>
    //         </div>
    //       )
    //     })}
    // </div>
    // return(
  //     <div className="movie-card">
  //     {this.state.movies.map((movie) => (

  //       <div>
  //       <div className="movie-poster" />
  //       <div className="movie-title">Avengers</div>
  //       <span className="movie-summary">Summary</span>
  //     </div>
  //     ))}
  // </div>
    // );

    // );
  // }
  // render() {
  //   return (
  //     <div className="movie-section">
  //       <h1>All Movies</h1>


  //       <div className="movies">
  //         <div className="movie-card">
  //           <div className="movie-poster card1" />
  //           <div className="movie-title">Avengers</div>
  //           <span className="movie-summary">Summary</span>
  //         </div>
  //         <div className="movie-card">
  //           <div className="movie-poster" ></div>
  //           <div className="movie-title">Aaa</div>
  //           <span className="movie-summary">Summary</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  }
}

export default Movie;
