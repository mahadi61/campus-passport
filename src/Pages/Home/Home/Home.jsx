import Banner from "../Banner/Banner";
import CollegeSection from "../College/CollegeSection";
import ImageGallery from "../ImageGellary/ImageGallery";
import RecommendedPapers from "../RecommendedPapers/RecommendedPapers";

const Home = () => {
  return (
    <div>
      <Banner />
      <CollegeSection />
      <ImageGallery />
      <RecommendedPapers />
    </div>
  );
};

export default Home;
