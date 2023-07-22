const ImageGallery = () => {
  const images = [
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
