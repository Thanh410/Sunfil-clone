import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { assets, products } from "../../../assets";
import {ProductCard} from "../ProductCard/ProductCard";

export default function ProductCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full max-w-[1344px] p-10 rounded-b-lg bg-[#025FCA]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: ".btn-prev",
          nextEl: ".btn-next",
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between absolute top-1/2 z-10 -translate-y-1/2 left-6 right-6">
        {/* Custom Prev Button */}
        <button
          ref={prevRef}
          className="btn-prev cursor-pointer bg-[#CDE4FE] rounded-full px-3 py-2"
        >
          <img src={assets.ArrowLeftIcon} alt="ArrowLeftIcon" />
        </button>

        {/* Custom Next Button */}
        <button
          ref={nextRef}
          className="btn-next cursor-pointer bg-[#CDE4FE] rounded-full px-3 py-2"
        >
          <img src={assets.ArrowRightIcon} alt="ArrowRightIcon" />
        </button>
      </div>
    </div>
  );
}
