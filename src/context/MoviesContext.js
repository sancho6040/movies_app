import React,{createContext, useEffect, useReducer, useState} from 'react';
import reviewsReducer, { reviewsInitialState } from '../reducers/reviewsReducer';
import moviesReducer, {moviesInitialState} from '../reducers/moviesReducer';

export const moviesContext = createContext()

const img = [
    "http://metaunisex.com/wp-content/uploads/2021/12/snwh_poster_bluemontage_4x5fb_1_.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg"
]

export default function MoviesContext({children}) {

    // const [movies,setMovies] = useState(mockup)
    const [movies,setMovies] = useReducer(moviesReducer, moviesInitialState)
    const [reviews, dispatchReviews] = useReducer(reviewsReducer, reviewsInitialState)
    const [loading,setLoading] = useState(true)
    const addReview = (movie,stars,comment)=>{
        setMovies({type:'addStars',movie,stars})
        dispatchReviews({type:'addReview',idMovie:movie._id,comment})
        
    }

    useEffect(()=>{
        fetch("https://backendtzuzulcode.wl.r.appspot.com/movies")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMovies({type:"addMovies",movies:data})
            setLoading(false)
        })
        .catch(error=>setLoading(false))
    },[])

  return <moviesContext.Provider value={{loading,movies:movies.movies,addReview,reviews:reviews.reviews}}>
      {children}
  </moviesContext.Provider>
}



// "https://rickandmortyapi.com/api/character"
// https://api.themoviedb.org/3/movie/550?api_key=df1e4a8757993a0c0c22e3a21e243288
// https://backendtzuzulcode.wl.r.appspot.com/
