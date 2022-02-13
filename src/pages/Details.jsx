import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { moviesContext } from '../context/MoviesContext';
import Movie from '../components/Movie';

export default function Details() {
    const {id} = useParams()
    const {movies} = useContext(moviesContext)

    const movie = movies.filter(movie=>movie.id==id)[0]

  return <>
    <Movie movie={movie}/>
  </>
}
