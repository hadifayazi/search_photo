function SearchBar() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("sending data to the parent");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
    </div>
  );
}
export default SearchBar;
