import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`order/${query}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Search order #"
        className="w-28 bg-yellow-100 sm:w-64 text-sm rounded-full px-4 py-2 placeholder:text-stone-400 transition-all duration-300 focus:outline-none md:focus:w-72"
      />
    </form>
  );
}

export default Search;
