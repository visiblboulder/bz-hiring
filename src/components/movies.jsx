import React, { Component } from 'react'
import httpClient from '../httpClient'
import Movie from './movie'
import Search from './search'
import Rating from './rating'

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            view: this.props.view,
            input: ''
        };
    }

    componentDidMount() {
        if (this.props.view === 'list') {
            this.fetchPopularTitles()
        }
        else {
            this.fetchByTitle()
        }
    }

    fetchPopularTitles = () => {
        httpClient.get('/discover/movie', {
            params: {
                'sort_by': 'popularity.desc',
                'with_original_language': 'en'
            }
        })
        .then (response =>  {
            console.log(response)
            const top6Results = response['data']['results'].slice(0, 6)
            this.setState({ movies : top6Results, view : 'list' })
        })
        .catch (error => {
            console.log(error)
        })
    }

    fetchByTitle = () => {
        httpClient.get('/search/movie', {
            params: {
                'query': `${this.state.input}`
            }
        })
        .then (response =>  {
            console.log(response)
            const top6Results = response['data']['results'].slice(0, 6)
            this.setState({ view: 'search', movies : top6Results })
        })
        .catch (error => {
            console.log(error)
        })
    }

    handleChange = (event) => {
        if (event.target.value === '') {
            this.fetchPopularTitles()
        }
        else {
            this.setState({input: event.target.value})
        }
    }

    handleClick = () => {
        this.fetchByTitle()
    }

    render() { 
        return ( 
            <React.Fragment>
                <Search handleChange={this.handleChange} handleClick={(this.handleClick)} />
                <Rating />
               { this.state.movies.map( movie => <Movie key={movie.id} data={movie} />)}
            </React.Fragment>)
    }
}
 
export default Movies;