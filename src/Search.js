const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="items-center flex flex-row justify-center">
      <div>
        <label className="block text-gray-500 font-bold md:text-right pr-4" htmlFor="search_bar">Search:</label>
      </div>
      <div className="w-1/2">
        <input
          className="transition-colors duration-100 ease-in-out text-gray-600 py-2 px-4 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-300 bg-gray-200"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies by title"
          name="search"
          id="search_bar"
        />
      </div>
    </div>
  );
};

export default SearchBar;
