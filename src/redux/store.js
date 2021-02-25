import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { searchMovieReducer } from './reducers/search-movie';

const rootReducer = combineReducers({
    search_movie: searchMovieReducer
});

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;