import React from "react";
import { assets } from "../../assets";

export const ProductCard = ({ product }) => {
  
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
      {/* Ảnh sản phẩm */}
      <div className="p-3 flex justify-center items-center h-[200px]">
        <img
          src={product.img}
          alt={product.title}
          className="rounded-t-lg w-[180px] h-[180px] object-contain cursor-pointer"
        />
      </div>

      {/* Nội dung sản phẩm */}
      <div className="flex flex-col justify-between flex-1 px-4 pb-5 pt-2">
        <div>
          <img
            src={assets.Badge}
            alt="Badge"
            className="w-[124px] mb-2"
          />
          <h2
            className="font-semibold text-[15px] line-clamp-2 min-h-[42px]"
            title={product.title}
          >
            {product.title}
          </h2>
        </div>

        {/* Giá sản phẩm */}
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-[#B71D18] text-[20px] font-semibold">
            {product.price} <span className="underline">đ</span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <p className="text-[#919EAB] line-through">
              {product.oldPrice} <span className="underline">đ</span>
            </p>
            <p className="text-[#B71D18]">{product.discount}</p>
          </div>
        </div>

        {/* Nút mua ngay */}
        <button className="mt-4 rounded-md bg-[#E6F1FF] px-3 py-3 w-full text-[#025FCA] font-semibold hover:bg-blue-200 transition-colors">
          Mua ngay
        </button>
      </div>
    </div>
  );
};
