import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";
import { assets, products } from "../../assets";

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
            <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="p-2">
                <img
                  src={item.img}
                  alt="Product1"
                  className="rounded-t-lg w-[214px] cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-4 px-3 pb-5 pt-2">
                <img src={assets.Badge} alt="Badge" className="w-[124px]" />
                <h2
                  className="font-semibold line-clamp-2"
                  title="Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)"
                >
                  {item.title}
                </h2>
                <div className="flex flex-col gap-2">
                  <p className="text-[#B71D18] text-[20px] font-semibold">
                    {item.price} <span className="underline">đ</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#919EAB] text-[14px] line-through">
                      {item.oldPrice} <span className="underline">đ</span>
                    </p>
                    <p className="text-[#B71D18]">-10%</p>
                  </div>
                  <button className="rounded-sm bg-[#E6F1FF] px-3 py-3 w-full text-[#025FCA] font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
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
