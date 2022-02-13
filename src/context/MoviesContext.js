import React,{createContext, useEffect, useState} from 'react';

export const moviesContext = createContext()

export default function MoviesContext({children}) {

    // const [movies,setMovies] = useState(mockup)
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("https://rickandmortyapi.com/api/character/")
            const data = await res.json();

            setMovies(data.results)
        }
        fetchData()
    },[])

  return <moviesContext.Provider value={{movies, setMovies}}>
      {children}
  </moviesContext.Provider>
}



// "https://rickandmortyapi.com/api/character"
// https://api.themoviedb.org/3/movie/550?api_key=df1e4a8757993a0c0c22e3a21e243288
// https://backendtzuzulcode.wl.r.appspot.com/