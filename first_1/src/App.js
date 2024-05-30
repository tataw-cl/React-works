import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movie from "./movies";

const API_url = "http://www.omdbapi.com?apikey=6ac0248d";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [count, setCount] = useState(0);
  // 6ac0248d
  const SearchResults = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  //Other way of doing the same thing
  // useEffect(() => {
  //   fetch("YOUR_API_URL")
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data));
  // }, []);
  // const movie1 = {
  //   Title: "Superman, Spiderman or Batman",
  //   Year: "2011",
  //   imdbID: "tt2084949",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
  // };
  useEffect(() => {
    SearchResults();
  }, []);

  return (
    <div className="app">
      {" "}
      <h1> Clarkson 's MovieLand </h1>{" "}
      <div className="search">
        <input
          placeholder="Tap here to Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />{" "}
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => {
            SearchResults(searchTerm);
          }}
        />{" "}
      </div>{" "}
      {/* <div>Number of movies: {movies.length} </div>{" "} */}{" "}
      {movies.length > 0 ? (
        <div className="container">
          {" "}
          {movies.map((movie) => {
            return <Movie movie={movie} />;
          })}{" "}
        </div>
      ) : (
        <div className="empty">
          {" "}
          <h2> No movies found </h2>{" "}
        </div>
      )}{" "}
      {/* <button
                                                                             onClick={() => {
                                                                               setCount((prCount) => prCount + 1);
                                                                             }}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  >
                                                                             {" "}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    +{" "}
                                                                           </button>{" "}
                                                                           <h1> {count} </h1>{" "}
                                                                           <button
                                                                             onClick={() => {
                                                                               setCount((ncount) => ncount - 1);
                                                                             }}
                                                                          >
                                                                            {" "}
                                                                             -{" "}
                                                                           </button>{" "} */}{" "}
    </div>
  );
};

export default App;
