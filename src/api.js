import axios from "axios";

const searchImages = async (keyword) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
    params: {
      query: keyword,
    },
  });

  return res.data.results;
};
export default searchImages;
