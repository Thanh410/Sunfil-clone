import React from "react";
import { assets } from "../../assets";

export const Explorer = () => {
  return (
    <div className="flex items-center justify-between bg-[#E6F1FF] px-30 py-8">
      <div className="flex items-center gap-4 flex-1">
        <img src={assets.Map} alt="Map" />
        <h2 className="font-medium text-[24px]">
          Xem hệ thống 88 cửa hàng trên toàn quốc
        </h2>
      </div>
      <button className="flex items-center justify-center gap-3 text-[#025FCA] text-lg font-semibold rounded-full px-6 py-3 bg-white cursor-pointer hover:opacity-90">
        Xem ngay
        <img src={assets.ChevronRight} alt="ChevronRight" />
      </button>
    </div>
  );
};
