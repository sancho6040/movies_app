import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {
  return <article className='movie'>
      <Link className='movie--title' to={"/details/"+movie.id}>{movie.name+" "+movie.id}</Link>
      <img className='movie--image' src={movie.image} alt={movie.name} />
      <div className='movie--stars'>{isNaN(movie.rating/movie.numberOfReviews)?0:movie.rating/movie.numberOfReviews}</div>
      
  </article>
}
