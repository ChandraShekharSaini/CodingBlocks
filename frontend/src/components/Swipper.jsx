import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ImageSlider() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-[65%] h-[65%] mt-10"
    >
      <SwiperSlide>
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/classroom-new-batch1.webp"
          alt="Classroom Batch"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/Banner+new.webp"
          alt="Banner New"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/image+995.webp"
          alt="Image 995"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cast+banner+redone_11zon.webp"
          alt="Cast Banner"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/festive+banner.webp"
          alt="Festive Banner"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cb3img.s3.ap-south-1.amazonaws.com/img/classroom+banner-02.jpg"
          alt="Classroom Banner"
          className="w-full h-full object-contain"
        />
      </SwiperSlide>
    </Swiper>
  );
}
