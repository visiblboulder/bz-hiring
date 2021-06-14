import axios from 'axios';

const httpClient = axios.create( { baseURL: 'https://api.themoviedb.org/4' } );
httpClient.defaults.headers.common['Authorization'] = `${process.env.REACT_APP_API_AUTH_TOKEN}`;

export default httpClient;