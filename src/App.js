import searchImages from "./api";
import SearchBar from "./components/searchBar";

function App() {
  const handleSubmit = (keyword) => {
    console.log("DO search");
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
