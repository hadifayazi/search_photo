import { useState } from "react";
import "./searchBar.css";
function SearchBar({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(keyword);
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search:</label>
        <input onChange={handleChange} value={keyword} />
      </form>
    </div>
  );
}
export default SearchBar;
