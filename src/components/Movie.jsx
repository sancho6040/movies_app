import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie({movie}) {
  
  return <article className='movie'>
      <Link className='movie--title' to={"/details/"+movie._id}>{movie.title}</Link>
      <img className='movie--image' src={"http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg"} alt={movie.title} />
      {/* <img className='movie--image' src={movie.image} alt={movie.title} /> */}
      <div className='movie--stars'>{isNaN(movie.rating)?0:movie.rating}</div>
      {/* <div className='movie--stars'>{isNaN(movie.rating/movie.numberOfReviews)?0:movie.rating/movie.numberOfReviews}</div> */}
      
  </article>
}
