const MovieCards = (movies) => {

  return (
    movies.map((movie) => (
      <div key={`${movie.id}_card`} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
        <div>
          <img src={`/img/${movie.poster}`} alt="Movie Poster" />
          <div className="max-h-80 px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center uppercase">{ movie.title }</div>
            <p className="text-gray-500 text-base text-center uppercase font-bold ">{ movie.tag_line }</p>
          </div>
          <div className="px-6 py-4">
            <p className="overflow-ellipsis text-gray-700 text-base max-height-">{ movie.description }</p>
          </div>
        </div>
        <div>
          <div className="grid grid-flow-col justify-around content-around justify-items-center border-t">
            <div><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mr-2 mb-1" />{ movie.star_rating }</div>
            <div className="text-right"><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mr-2 mb-1" />{ movie.release_date }</div>
          </div>
          <div className="flex-wrap px-6 pt-4 pb-2 bg-gray-100 border-t"> {/* Genre */}
            { movie.genres.map((genre, i) => (
              <span key={`${movie.id}_${genre}`} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ genre }</span>
            ))}
          </div>
        </div>
      </div>
    ))
  );
};

export default MovieCards;
