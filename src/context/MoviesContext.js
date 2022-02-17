import React,{createContext, useEffect, useReducer, useState} from 'react';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';
import moviesReducer, {moviesInitialState} from '../reducers/moviesReducer';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    // const [movies,setMovies] = useState(mockup)
    const [movies,setMovies] = useReducer(moviesReducer, moviesInitialState)
    const [reviews, dispatchReviews] = useReducer(reviewsReducer, reviewsInitialState)

    const addReview = (movie, stars, comment) =>{
        setMovies({type: 'addStars', movie, stars})
        dispatchReviews({type: 'addReview', idMovie: movie.id, comment: comment})
    }

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://rickandmortyapi.com/api/character/")
            const data = await res.json();

            setMovies(data.results)
        }
        fetchData()
    },[])

  return <moviesContext.Provider value={{movies: movies.movies, addReview, reviews: reviews.reviews}}>
      {children}
  </moviesContext.Provider>
}



// "https://rickandmortyapi.com/api/character"
// https://api.themoviedb.org/3/movie/550?api_key=df1e4a8757993a0c0c22e3a21e243288
// https://backendtzuzulcode.wl.r.appspot.com/