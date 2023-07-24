import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../Component/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Great product! I love it.",
  },
  {
    id: 2,
    name: "Jane Smith",
    collegeName: "Evergreen College",
    review: "Excellent service and fast delivery.",
  },
  // Add more reviews as needed
];

const Review = () => {
  return (
    <>
      <Container>
        <h1 className="text-3xl font-bold mb-4">Review</h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={review.id}
              className="flex justify-center items-center"
            >
              <div className="bg-[#ff7350] text-white text-center py-7 px-11 rounded-lg">
                <h1 className="text-2xl font-semibold mb-2">
                  {review.collegeName}
                </h1>
                <p className="text-xl">{review.review}</p>
                <h1 className="text-xl font-semibold mb-2">
                  Review By:{review.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Review;
