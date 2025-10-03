import React, { useState } from "react";
import { assets, products } from "../../assets";
import CollapseSection from "../CollapseSection/CollapseSection";
import { ArrowDown, ArrowDownIcon, ChevronDown } from "lucide-react";
import { ProductCard } from "../ProductCard/ProductCard";
import { FeatureList } from "../FeatureList/FeatureList";

export const Products = () => {
  const [activeTab, setActiveTab] = useState("related");

  const tabs = [
    { id: "related", label: "Liên quan" },
    { id: "bestseller", label: "Bán chạy" },
    { id: "newest", label: "Mới nhất" },
    { id: "featured", label: "Nổi bật" },
  ];

  return (
    <div className="flex  gap-4 px-30">
      <div className="flex flex-col gap-2 w-[300px] bg-white shadow-md rounded-md py-3">
        <div className="flex gap-3 p-3">
          <img src={assets.FilterIcon} alt="FilterIcon" className="" />
          <h2 className="text-[24px] text-[#0373F3] font-bold">Bộ lọc</h2>
        </div>
        {/* Danh mục sản phẩm */}
        <CollapseSection title="Danh mục sản phẩm">
          {[
            "Lọc gió Động cơ - Air Filter",
            "Lọc Nhiên Liệu - Fuel Filter",
            "Bộ lọc dầu",
            "Chưa phân loại",
            "Khác",
          ].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`cat-${i}`}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`cat-${i}`} className="text-[14px]">
                {label} <span className="text-gray-500">(24)</span>
              </label>
            </div>
          ))}
        </CollapseSection>

        {/* Khoảng giá */}
        <CollapseSection title="Khoảng giá">
          {[
            "Dưới 100,000 đ",
            "100,000 đ - 300,000 đ",
            "300,000 đ - 500,000 đ",
            "Trên 500,000 đ",
          ].map((label, i) => (
            <button
              key={i}
              className="p-2 w-full bg-white border border-[#919EAB3D] text-[14px] rounded-md text-[#1C252E] cursor-pointer hover:bg-[#F5F5F5]"
            >
              {label}
            </button>
          ))}
        </CollapseSection>

        {/* Thương hiệu */}
        <CollapseSection title="Thương hiệu">
          {["Asakashi", "Bosch", "Huyndai"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`brand-${i}`}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`brand-${i}`} className="text-[14px]">
                {label} <span className="text-gray-500">(24)</span>
              </label>
            </div>
          ))}
        </CollapseSection>

        {/* Năm sản xuất */}
        <CollapseSection title="Năm sản xuất">
          {["2021", "2020", "2019", "2018"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`year-${i}`}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`year-${i}`} className="text-[14px]">
                {label} <span className="text-gray-500">(24)</span>
              </label>
            </div>
          ))}
        </CollapseSection>

        {/* Xuất xứ */}
        <CollapseSection title="Xuất xứ">
          {["Đức", "Nhật Bản", "Trung Quốc"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={`origin-${i}`}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={`origin-${i}`} className="text-[14px]">
                {label} <span className="text-gray-500">(24)</span>
              </label>
            </div>
          ))}
        </CollapseSection>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-[20px] font-semibold">Danh sách sản phẩm</h2>
          <div className="flex items-center justify-between gap-2">
            <p>Sắp xếp theo</p>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 font-semibold text-[14px] rounded-lg cursor-pointer transition-all duration-300 ease-in-out
            ${
              activeTab === tab.id
                ? "bg-white border border-[#0373F3] text-[#1C252E] scale-105 shadow-sm"
                : "bg-white border border-[#919EAB3D] text-[#1C252E] scale-100"
            } hover:bg-[#F5F5F5]`}
              >
                {tab.label}

                {/* Badge chỉ có ở "Liên quan" */}
                {activeTab === tab.id && (
                  <div className="absolute -top-[2px] -right-[1px]">
                    <img src={assets.Conversation} alt="Conversation" />
                    <img
                      src={assets.Unread}
                      alt="Unread"
                      className="absolute top-[2px] right-[2px]"
                    />
                  </div>
                )}
              </button>
            ))}
            <p className="flex items-center gap-2 cursor-pointer">
              Giá: Thấp → Cao
              <ChevronDown className="w-4 h-4" />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
