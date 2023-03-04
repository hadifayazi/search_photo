import "./imageList.css";
import ImageShow from "./imageShow";
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div className="image-list ">{renderedImages}</div>;
}
export default ImageList;
