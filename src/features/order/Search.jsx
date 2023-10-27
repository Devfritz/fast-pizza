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
      />
    </form>
  );
}

export default Search;
