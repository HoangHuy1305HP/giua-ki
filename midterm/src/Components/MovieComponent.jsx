import React from 'react';
import '../Css/MovieComponent.css'
import data from '../MovieData';

const MovieComponent = ({ movie, onClick }) => {
  return (
    <div className="movie-item" onClick={onClick}>
      <img src={movie.image} alt={movie.movieName} />
      <div className="movie-title">{movie.movieName}</div>
      <div className='Rectangle6'>
            <div className="movie-episode">Episode {movie.episode}</div>
        </div>
    </div>
  );
};

export default MovieComponent;
