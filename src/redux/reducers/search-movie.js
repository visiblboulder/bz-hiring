import { SET_GENRES, SET_MOVIES, SET_LOADING } from "../types";

const initial = {
    movies: [],
    genres: [],
    loading: false
};

export function searchMovieReducer(state = initial, action) {
    switch (action.type) {
        case SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}