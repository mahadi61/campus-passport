// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img src="../../../../../public/image/banner-img4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../../public/image/banner-img5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../../public/image/banner-img4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
