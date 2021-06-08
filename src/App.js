import './assets/css/App.css';
import movies from './data/movies.json';

function collapsible_description(movie) {
  return (
    <div key={`${movie.id}_description`} className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center uppercase">{ movie.title }</div>
      <p className="text-gray-500 text-base text-center uppercase font-bold ">{ movie.tag_line }</p>
      <p className="text-gray-700 text-base max-height-">{ movie.description }</p>
    </div>
  );
}

const movie_cards = movies.map((movie) => {
  return (
  <div key={movie.id} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
    <img className="w-100 row-span-3" src={`/img/${movie.poster}`} alt="Movie Poster" />
    <div key={`${movie.id}_description`} className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center uppercase">{ movie.title }</div>
      <p className="text-gray-500 text-base text-center uppercase font-bold ">{ movie.tag_line }</p>
      <p className="text-gray-700 text-base max-height-">{ movie.description }</p>
    </div>
    <div className="grid grid-flow-col justify-around content-around justify-items-center border-t">
      <div><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mr-2 mb-1" />{ movie.star_rating }</div>
      <div className="text-right"><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mr-2 mb-1" />{ movie.release_date }</div>
    </div>
    <div className="flex-wrap px-6 pt-4 pb-2 bg-gray-100 border-t"> {/* Genre */}
      { movie.genres.map((genre, i) => (
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ genre }</span>
      ))}
    </div>
  </div>
  );
})

function App() {
  return (
    <main className="flex-auto">
      <div className="overflow-hidden">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-10 gap-4 flex">
          { movie_cards }
        </div>
      </div>
    </main>
  );
}

export default App;
