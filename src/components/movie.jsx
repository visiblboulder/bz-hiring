import React, { Component } from 'react';

class Movie extends Component {
    state = {  
        movie: this.props.data
    }
    render() { 
        return ( <div className="text-center m-5 p-5 rounded bg-white shadow-xl">
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt={this.state.movie.title} />
                <h1>{this.state.movie.title}</h1>
                <p className="h-24 overflow-ellipsis overflow-hidden leading-normal text-left mt-5 mb-5 ...">{this.state.movie.overview}</p>
                <p>Rating: {this.state.movie.vote_average}</p>
                <p>Release Date: {this.state.movie.release_date}</p>
                Genre Ids: 
                { this.state.movie.genre_ids.map( g_id => <div key={g_id}>{g_id}</div>)}
                <p>{this.state.movie.genre_ids}</p>
            </div> );
    }
}
 
export default Movie;