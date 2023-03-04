import searchImages from "./api";
import SearchBar from "./components/searchBar";

function App() {
  const handleSubmit = async (keyword) => {
    const result = await searchImages(keyword);
    console.log(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}
export default App;
