const mockup = [
    {"_id":"61f2aae9b6c9091c2581e033",
    "title":"Mad Max",
    "date":"2022-01-27T14:23:37.177Z",
    "rating":4.5,
    "imgage": "https://pics.filmaffinity.com/Mad_Max_Furia_en_la_carretera-171270143-large.jpg",
    "__v":0},
]


export const moviesInitialState = {
    movies: []
}

export default function moviesReducer(state, action){

    let newState;
    switch(action.type){
        case 'addStars':
            const {movie,stars} = action
            movie.stars = movie.stars + parseInt(stars)
            movie.numberOfReviews++
            newState = {movies:[...state.movies]}
            break;
        case 'addMovies':
            const {movies} = action
            newState = {movies}
            break;
        default:
            newState = state;
    }
    
    return newState
}
