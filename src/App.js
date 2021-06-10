import { useState } from 'react';
import './assets/css/App.css';
import movie_list from './data/movies.json';
import Search from './Search';
import MovieCards from './MovieCards';


function filterMovies (movies, query) {
  if (!query) {
    return movies;
  }
  return movies.filter((movie) => {
    if (movie.title.toLowerCase().includes(query.toLowerCase())) {
      return movie;
    }
    return null;
  });
}

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredMovies = filterMovies(movie_list, searchQuery);

  let movieDisplay = MovieCards(filteredMovies);
  if (filteredMovies.length === 0) {
    movieDisplay = <p className="col-span-full text-center">No results match your query.</p>
  }

  return (
    <main className="flex-auto">
      <div className="rounded-t-lg overflow-hidden flex flex-col justify-center pt-6">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-10">
          { movieDisplay }
        </div>
      </div>
    </main>
  );
}

export default App;
