import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../Component/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useState } from "react";
import { Autoplay } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  fetch("http://localhost:5000/all-colleges")
    .then((res) => res.json())
    .then((data) => {
      setReviews(data);
    });

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
              key={review?._id}
              className="flex justify-center items-center"
            >
              <div className="bg-[#ff7350] text-white text-center py-7 px-11 rounded-lg">
                <h1 className="text-2xl font-semibold mb-2">{review?.name}</h1>
                <p className="text-xl">{review?.review}</p>

                <p>Rating: {review?.rating}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Review;
