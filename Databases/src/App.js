import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // We can transform this function to change the way we code the response
  /**function fetchMoviesHandler() {
    // Default is GET
    // As fetch is an asynchronous function we need to make sure the result is already load into the app
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json(); // Built-in method that transform the response into objects
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies); // We gotta make sure the name of the properties are the same we are going to use
      });
  }*/

  // If we add the keyword async we are telling JS that we want to be able to wait for some promise (response)
  // and then work with this data as we want.
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // Default is GET
    // Coding the function this way we wait for the response to end and give JS permission to continue executing its function code.
    try {
      const response = await fetch(
        "" // Link to Firebase database
      );

      // We need to check wether the response returned and ok state or an error code like 202, 201, ...
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies); // We gotta make sure the name of the properties are the same we are going to use
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    // In this case we are using the POST section
    const response = await fetch(
      "", // Link to Firebase database
      {
        method: "POST",
        body: JSON.stringify(movie), // We need a JSON object in the body
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.json();
    console.log(data);
  }

  // We can refactor the second section of the fragment by analazying the state of the request outside the render
  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
