import React, { useState } from 'react';
import NavBar from './Components/NavBar'; 
import MovieComponent from './Components/MovieComponent'; 
import anh1 from "./img/imageprj.png";
import data from './MovieData'; 
import './App.css'; 

function App() {
  const [title, setTitle] = useState('Weather with you');
  const [description, setDescription] = useState('Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.');
  const [banner,setBanner] = useState('anh1')
  const handleMovieClick = (item) => {
    setTitle(item.movieName);
    setDescription(item.description);
    setBanner(item.banner)
  };

  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <div className="explore"><h2 style={{color:"white"}}>Explore</h2></div>
        <div className="what"><h3>What are you gonna watch today?</h3></div>
        <div className="banner">
          <img src={anh1}></img>
          {/* { <img src={banner} alt='Banner'></img> } : ảnh trên banner sẽ thay đổi nếu ấn vào 1 bộ phim dưới phần new release*/} 
          <div className='content'>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
        <div className='new'>New Release</div>
        <div className='list'>
        {data.map((movie) => (
            <MovieComponent img={movie.image} key={movie.id} movie={movie} onClick={() => handleMovieClick(movie)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;