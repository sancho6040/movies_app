export const reviewsInitialState = {
    reviews: []
}

export default function reviewsReducer(state, action) {
    let newState;

    switch(action.type){
        case 'addReview':
            const {idMovie, comment} = action
            newState = [...state, {id: reviews.length, idMovie: idMovie, comment: comment}]
        break;
    }
    return newState

}

