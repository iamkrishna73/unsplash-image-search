function ImageShow({ image }) {
  return (
    <div className="col-md-4">
      <img className="rounded mx-auto d-block" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
