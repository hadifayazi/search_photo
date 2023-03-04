function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("cars");
  };
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Search for a photo</button>
    </div>
  );
}
export default SearchBar;
