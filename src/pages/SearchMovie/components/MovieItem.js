import React from 'react';
import { useSelector } from 'react-redux';
import Images from '../../../utils/images';
import { generateEmptyTextByLength } from '../../../services/operators';
import MyModal from '../../../components/Modal';
import { config } from '../../../utils/config';

const MovieOverViewTextVisibleLength = 100;

const MovieItem = ({ data }) => {
    const [modalIsOpen, showModal] = React.useState(false);

    const { genres } = useSelector(state => state.search_movie);

    return (
        <div className="shadow-lg bg-white rounded-md">
            <div className="px-3 py-3" style={{ height: 550 }}>
                <img alt="movie-poster-bg" className="w-full object-cover h-full" src={`${config.movie_image_url_prefix}${data.poster_path}`} style={{ backgroundColor: 'lightgray' }} />
            </div>
            <div className="py-4">
                <p className="text-xl px-4 text-gray-700 font-bold title overflow-ellipsis whitespace-nowrap overflow-hidden">{data.title}</p>
                <p className="text-xs text-gray-500 font-bold">CHASE SOMETHING REAL.</p>
                <p className="text-sm text-gray-500 text-left mt-3 px-3">{`${data.overview.substr(0, MovieOverViewTextVisibleLength)}${data.overview.length > MovieOverViewTextVisibleLength ? '...' : generateEmptyTextByLength(MovieOverViewTextVisibleLength - data.overview.length)}`}</p>
                <div className="h-10">
                    {data.overview.length > MovieOverViewTextVisibleLength && (
                        <button className="text-blue-400 text-sm focus:outline-none" onClick={() => showModal(true)}>Read More</button>
                    )}
                </div>
                <div className="flex py-4 border-t border-b px-2.5">
                    <div className="w-1/2 flex items-center">
                        <img src={Images.FullStar} className="w-6" alt="full-star" />
                        <span className="ml-2">{data.vote_average}</span>
                    </div>
                    <div className="w-1/2 flex items-center">
                        <img src={Images.Calendar} className="w-6" alt="empty-star" />
                        <span className="ml-2">{data.release_date || '???'}</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 font-bold mt-3">GENRES</p>
                <div className="flex items-center flex-wrap py-3 px-2">
                    {data.genre_ids.map(id => {
                        const find = genres.find(i => i.id === id);
                        const genre_name = find ? find.name : 'Unknown';
                        return (
                            <span className="text-gray-800 bg-gray-200 rounded-full font-semibold px-4 py-1 m-1 text-sm" key={id}>{genre_name}</span>
                        )
                    })}
                    {data.genre_ids.length === 0 && (
                        <p className="text-sm text-gray-500 text-left mt-3 px-3">No genres</p>
                    )}
                </div>
            </div>
            <MyModal
                isOpen={modalIsOpen}
                onRequestClose={() => showModal(false)}
                contentLabel="Movie Overview Modal"
            >
                <p className="text-xl text-center font-bold">{data.title}</p>
                <p className="text-xs text-gray-500 font-bold text-center">CHASE SOMETHING REAL.</p>
                <p className="text-sm text-gray-500 text-left mt-3 px-3">{data.overview}</p>
            </MyModal>
        </div>
    )
}

export default MovieItem;