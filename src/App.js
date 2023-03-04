import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/searchBar";

import ImageList from "./components/imageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (keyword) => {
    const result = await searchImages(keyword);
    console.log(result);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
