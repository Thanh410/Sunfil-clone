import React from "react";
import { assets } from "../../assets";
import ProductCarousel from "../Products/ProductCarousel/ProductCarousel";

export const Banner = () => {
  return (
    <div className="flex flex-col mb-10 px-30 pt-6 gap-6">
      <div className="flex items-center gap-4 text-sm">
        <a href="/" className="text-[#919EAB]">
          Trang chủ
        </a>
        <img src={assets.ArrowRight} alt="ArrowRight" className="" />
        <a href="#" className="text-[#024897] font-semibold">
          Sản phẩm
        </a>
      </div>
      <div>
        <img src={assets.Banner} alt="Banner" />
        <ProductCarousel />
      </div>
    </div>
  );
};
