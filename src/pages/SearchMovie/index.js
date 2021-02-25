import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieItem from './components/MovieItem';
import { getGenres, getMovies } from '../../redux/actions/search-movie';
import Images from '../../utils/images';

const SearchMovies = () => {
    const [searchText, setSearchText] = useState('');
    const [searchRate, setSearchRate] = useState(0);

    const dispatch = useDispatch();
    const { movies, loading } = useSelector(state => state.search_movie);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getMovies({ page: 1 }));
    }, [])

    useEffect(() => {
        if (searchRate > 0) {
            setSearchText('');
            dispatch(getMovies({ rate: searchRate }));
        }
    }, [searchRate])

    useEffect(() => {
        if (searchText.length > 0) setSearchRate(0);
    }, [searchText])

    const onPressSearchButton = useCallback(() => {
        dispatch(getMovies({ search: searchText }));
    }, [dispatch, searchText]);

    const handleSearchKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            onPressSearchButton();
        }
    }, [onPressSearchButton]);

    const handleSearchText = useCallback(event => {
        setSearchText(event.target.value);
    }, [setSearchText]);

    return (
        <div className="search-movies min-h-screen mx-auto px-4 py-8 max-w-5xl">
            <div className="flex">
                <div className="w-full">
                    <input className="w-full h-12 px-2 rounded-md" placeholder="Search titles" value={searchText} onChange={handleSearchText} onKeyDown={handleSearchKeyDown} />
                </div>
                <div className="w-28 ml-4">
                    <button className="h-12 w-full bg-blue-500 text-gray-100 rounded-md" onClick={onPressSearchButton}>Search</button>
                </div>
            </div>
            <div className="mt-16 mb-8">
                <p className="text-sm font-bold text-gray-600">Filter by rating</p>
                {Array(10).fill(null).map((i, index) => (
                    <button className="w-7 focus:outline-none" onClick={() => setSearchRate(index + 1)} key={index}>
                        <img alt="search-star" src={searchRate < index + 1 ? Images.EmptyStar : Images.FullStar} />
                    </button>
                ))}
            </div>
            {
                loading && (
                    <i className="fas fa-spinner fa-spin mb-4"></i>
                )
            }
            {movies.length === 0 ? (
                <p className="text-gray-500 text-sm">No results</p>
            ) : (
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                        {movies.map(movie => (
                            <MovieItem data={movie} key={movie.id} />
                        ))}
                    </div>
                )}

        </div>

    )
}

export default SearchMovies;