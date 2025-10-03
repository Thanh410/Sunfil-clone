import React from "react";
import { assets } from "../../assets";

export const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <div className="p-2">
        <img
          src={product.img}
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
          {product.title}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-[#B71D18] text-[20px] font-semibold">
            {product.price} <span className="underline">đ</span>
          </p>
          <div className="flex products-center gap-2">
            <p className="text-[#919EAB] text-[14px] line-through">
              {product.oldPrice} <span className="underline">đ</span>
            </p>
            <p className="text-[#B71D18]">-10%</p>
          </div>
          <button className="rounded-sm bg-[#E6F1FF] px-3 py-3 w-full text-[#025FCA] font-semibold hover:bg-blue-200 transition-colors cursor-pointer">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};
