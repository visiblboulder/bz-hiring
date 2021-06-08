import './assets/css/App.css';
import movies from './data/movies.json';

function collapsible_description(movie) {
  return (
    <div key={`${movie.id}_description`} className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center uppercase">{ movie.title }</div>
      <p className="text-gray-500 text-base text-center uppercase font-bold ">{ movie.tag_line }</p>
      <p className="text-gray-700 text-base">{ movie.description }</p>
    </div>
  );
}

const movie_cards = movies.map((movie) => {
  return (
  <div key={movie.id} className="max-w-sm rounded overflow-hidden shadow-lg grid grid-rows-3 flex flex-col justify-between justify-items-stretch">
    <img className="w-full flex row-span-3" src={`/img/${movie.poster}`} alt="Movie Poster" />
    { collapsible_description(movie) }
    <hr />
    <div className="flex row-span-2 grid grid-cols-2">
      <div><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mx-2 mb-1" />{ movie.star_rating }</div>
      <div className="text-right"><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mx-2 my-1" />{ movie.release_date }</div>
    </div>
    <hr />
    <div className="flex flex-wrap flex-grow row-span-1 justify-self-end px-6 pt-4 pb-2 bg-gray-100"> {/* Genre */}
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
