const ImageGallery = () => {
  const images = [
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
    "https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/evn-img-4.jpg",
  ];

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="overflow-hidden shadow-md">
            <img src={imageUrl} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
