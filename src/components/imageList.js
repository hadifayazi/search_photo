import ImageShow from "./imageShow";
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div>{renderedImages}</div>;
}
export default ImageList;
