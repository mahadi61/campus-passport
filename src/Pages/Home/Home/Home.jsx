import { useContext } from "react";
import Container from "../../../Component/Container";
import { AuthContext } from "../../../Provider/AuthProvider";
import Banner from "../Banner/Banner";
import CollegeCard from "../College/CollegeCard";
import CollegeSection from "../College/CollegeSection";
import ImageGallery from "../ImageGellary/ImageGallery";
import RecommendedPapers from "../RecommendedPapers/RecommendedPapers";
import Review from "../Rivews/Review";

const Home = () => {
  const { collegeData } = useContext(AuthContext);

  if (Object.keys(collegeData).length > 0) {
    return (
      <>
        <Container>
          <div className="w-3/6 mx-auto">
            <CollegeCard collegeData={collegeData}></CollegeCard>
          </div>
        </Container>
      </>
    );
  }

  return (
    <div>
      <Banner />
      <CollegeSection />
      <ImageGallery />
      <RecommendedPapers />
      <Review />
    </div>
  );
};

export default Home;
