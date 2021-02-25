import { NotificationManager } from 'react-notifications';
import { API } from "../../services/api"
import { SET_MOVIES, SET_GENRES, SET_LOADING } from "../types"
var sortBy = require('lodash.sortby');

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
});

export const setGenres = (genres) => ({
    type: SET_GENRES,
    payload: genres
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading
});

export const getMovies = (query) => (dispatch) => {
    dispatch(setLoading(true));
    if (!!query.search) {
        API.getMoviesByTitle(query.search).then(res => {
            dispatch(setLoading(false));
            dispatch(setMovies(res.data.results));
        }).catch(e => {
            dispatch(setLoading(false));
            NotificationManager.error(e.toString());
        })
    } else if (!!query.rate) {
        API.getMoviesByRate(query.rate).then(res => {
            dispatch(setLoading(false));
            const movies = res.data.results;
            dispatch(setMovies(movies.slice(0, 6)));
        }).catch(e => {
            dispatch(setLoading(false));
            NotificationManager.error(e.toString());
        })
    } else {
        API.getMovies().then(res => {
            dispatch(setLoading(false));
            const movies = res.data.items;
            dispatch(setMovies(sortBy(movies, 'popularity').reverse().slice(0, 6)));
        }).catch(e => {
            dispatch(setLoading(false));
            NotificationManager.error(e.toString());
        })
    }
}

export const getGenres = () => (dispatch) => {
    dispatch(setLoading(true));
    API.getGenres().then(res => {
        dispatch(setLoading(false));
        dispatch(setGenres(res.data.genres));
    }).catch(e => {
        dispatch(setLoading(false));
        NotificationManager.error(e.toString());
    })
}