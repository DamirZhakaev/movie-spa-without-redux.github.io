import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ChatBot from '../chatbot/ChatBot';
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";
import { toastWarnNotify } from "../helpers/ToastNotify";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Footer from "./Footer";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null); // Состояние для хранения случайного фильма
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const getRandomMovie = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      setRandomMovie(randomMovie); // Устанавливаем случайный фильм в состояние
    } else {
      toastWarnNotify("No movies available for random selection");
    }
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <div className="button-container">
        <button className="random-movie-button" onClick={getRandomMovie}>
          Get Random Movie
        </button>
        {randomMovie && (
          <div className="random-movie-info">
            <h2>Randomly Selected Movie:</h2>
            <MovieCard key={randomMovie.id} {...randomMovie} />
          </div>
        )}
        <button className="chat-button" onClick={toggleChat}>
          Chat
        </button>
      </div>
      {isChatOpen ? <ChatBot /> : null}
      </>
    
    );
};


export default Main;