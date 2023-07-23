import { Link } from "react-router-dom";
import Container from "../../../Component/Container";

const ImageGallery = () => {
  const images = [
    "https://amath.washington.edu/sites/amath/files/images/graduation_2022c.jpg",
    "https://pxl-ucreativeacuk.terminalfour.net/filters:format(webp)/prod01/channel_8/media/marketing-media/blog-imagery/391-0722-F-P-88.jpg",
    "https://images.theconversation.com/files/526908/original/file-20230517-18592-a08agm.jpg?ixlib=rb-1.1.0&rect=23%2C46%2C5092%2C3366&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    "https://hips.hearstapps.com/hmg-prod/images/graduation-wishes-1651254203.jpeg?crop=1xw:0.84375xh;center,top",
    "https://www.herts.ac.uk/__data/assets/image/0006/363912/UOH_6935.jpg",
    "https://cf.ltkcdn.net/family/images/orig/339113-2121x1414-college-graduates-858465270.jpg",
  ];

  return (
    <>
      <Container>
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Image Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className="relative group  overflow-hidden shadow-md"
              >
                <img className="h-full" src={imageUrl} alt={`Image ${index}`} />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={imageUrl}
                    className="text-white bg-[#ff7350] py-2 px-4 rounded-lg transform scale-0 group-hover:scale-100 transition-transform transition-delay-500"
                  >
                    View Image
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ImageGallery;
