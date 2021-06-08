import logo from './logo.svg';
import './assets/css/App.css';
import movies from './data/movies.json';

const movie_cards = movies.map( (movie) => {
  return (
  <div key={movie.id} className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={`/img/${movie.poster}`} alt="Movie Poster" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center uppercase">{ movie.title }</div>
      <p className="text-gray-500 text-base text-center uppercase font-bold ">{ movie.tag_line }</p>
      <p className="text-gray-700 text-base max-height-">{ movie.description }</p>
    </div>
    <hr />
    <div className="grid grid-cols-2">
      <div><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mx-2 mb-1" />{ movie.star_rating }</div>
      <div className="text-right"><img src="/img/star-full.png" alt="Star" className="inline-block w-5 mx-2 my-1" />{ movie.release_date }</div>
    </div>
    <hr />
  <div className="justify-self-end px-6 pt-4 pb-2 bg-gray-100"> {/* Genre */}
      { movie.genres.map((genre, i) => (
        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ genre }</span>
      ))}
    </div>
  </div>
  );
})

function App() {
  return (
    <main className="flex-auto ">
      <div className="overflow-hidden">
        <div className="grid grid-cols-3 p-10 gap-4">
          { movie_cards }
        </div>
      </div>
    </main>
  );
}

export default App;
