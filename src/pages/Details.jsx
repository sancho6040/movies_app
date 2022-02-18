import React, { useContext, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { moviesContext } from '../context/MoviesContext';
import Movie from '../components/Movie';

export default function Details() {
    const {id} = useParams()
    const {movies, reviews, addReview, loading} = useContext(moviesContext)
    const comentario = useRef()
    const rating = useRef()
    
    const movie = movies.filter(movie=>movie._id==id)[0]
    
    if(!movie && !loading){
    return <Navigate to="/notfound"/>
    }
    
    const add = ()=>{
    let comment = comentario.current.value
    let stars = rating.current.value
    addReview(movie,stars,comment)
    }

  return loading?<p className='loading'>Loading...</p>:<div className='details-page'>
      <div className='details-movie'>
        <Movie movie={movie}></Movie>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quos nulla consequuntur exercitationem placeat voluptate quae vero numquam quibusdam ipsam laboriosam quasi nostrum inventore soluta quo, earum veritatis deleniti rerum deserunt distinctio ipsa. Obcaecati impedit quaerat autem sint et numquam similique dolore recusandae ipsa placeat odio cum facilis enim corporis, quae minus repellat. Ullam, quos? Hic sequi voluptatem eos velit fugit voluptates odit beatae, quaerat molestias, iusto minima at accusamus ut, consequuntur officiis! Sit labore exercitationem placeat quasi, libero nisi.</p>
      </div>
      {console.log(reviews)}
      <div className='details-input'>
        <div>
          <input className='login-input' ref={comentario} type="text" placeholder='escribe tu comentario...'></input>
          <select className='login-input' ref={rating}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button onClick={add}>Agregar review</button>
      </div>

      <div className='details-reviews'>
        {/* && (and): Operador de cortocircuito */}
        {/* || (or)*/}
        {reviews.map(
          review=>review.idMovie===id
          &&<p className='review' key={review.id}>{rating.current.value + " " + review.comment}</p>)
        }
      </div>

      {/* Mostrar comentarios */}
  </div>;
}
