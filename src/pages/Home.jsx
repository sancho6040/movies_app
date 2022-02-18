import React, { useContext } from 'react';
import Movies from '../components/Movies'
import { moviesContext } from '../context/MoviesContext';

export default function Home() {

    const {movies, images} = useContext(moviesContext)

    return <>
        {/* <section className='hero'>
            <div className='hero--carrousel'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdO6OzFyT9JV_oKDCCPDY3ZMAW4zhr_ASSg&usqp=CAU' />
            </div>
        </section> */}
        <section className='movies-section'>
            <Movies movies={movies} image={images}/>
            {console.log("movies", movies)}
        </section>


    </>;
}
