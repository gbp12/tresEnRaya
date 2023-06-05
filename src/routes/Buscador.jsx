import styles from "../components/styles/Buscador.module.css";
import { Outlet, Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import { MovieForm } from "../components/MovieForm";
/* omdbapi url: https://www.omdbapi.com/?apikey=78e4aae&s=Avengers */
export default function Buscador() {
  const [movies, setMovies] = useState(null);
  const [cargando, setCargando] = useState(false);
  const hasMovies = movies && movies.length > 0;

  return (
    <>
      <header>
        <MovieForm setMovies={setMovies} setCargando={setCargando} />
      </header>
      {cargando ? (
        <p>cargando</p>
      ) : (
        <div className={styles.container}>
          {hasMovies ? (
            movies.map((movie) => (
              <div className={styles.card} key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.year}</p>
              </div>
            ))
          ) : (
            <p>No hay peliculas</p>
          )}
        </div>
      )}

      <Outlet />
    </>
  );
}
