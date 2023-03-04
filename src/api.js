import axios from "axios";

const searchImages = async () => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
    },
    params: {
      query: "cars",
    },
  });
  console.log(res);
  return res;
};
export default searchImages;
