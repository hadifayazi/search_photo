import searchImages from "./api";
import SearchBar from "./components/searchBar";

function App() {
  const handleSubmit = (keyword) => {
    searchImages(keyword);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
