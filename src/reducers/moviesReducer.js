export const moviesInitialState = {
    movies: []
}

export default function moviesReducer(state, action){

    let newState;
    switch (action.type) {
        case 'addStars':
            const {movie, stars} = action
            movie.stars += parseInt(stars)
            movie.numberOfReviews++
            newState = {movies: [...state.movies]}
            break;
    }
    return newState
}