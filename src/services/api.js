import { config } from '../utils/config';
const axios = require("axios");

const apiCall = async (type, url, param, options = {}) => {
    const opt = {
        headers: {
            "Content-Type": "application/json"
        },
        timeout: config.api_timeout,
        ...options,
    };

    if (type === "get" || type === "delete") {
        return axios[type](`${config.backend_base_url}${url}`, opt);
    } else {
        return axios[type](`${config.backend_base_url}${url}`, param, opt);
    }
};
const getGenres = () => apiCall("get", `/genre/movie/list?api_key=${config.tmdb_api_key}`, {});
const getMovies = (page = 1) => apiCall("get", `/list/${page}?api_key=${config.tmdb_api_key}`, {});
const getMoviesByTitle = (title) => apiCall("get", `/search/movie?api_key=${config.tmdb_api_key}&query='${title}'`, {});
const getMoviesByRate = (rate) => apiCall("get", `/discover/movie?api_key=${config.tmdb_api_key}&vote_average.gte=${rate}&vote_average.lte=${Math.min(10, rate + 0.9)}&sort_by=vote_average.desc`, {});
export const API = { getGenres, getMovies, getMoviesByTitle, getMoviesByRate }; 