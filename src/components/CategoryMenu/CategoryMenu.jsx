import React, { useState } from "react";
import { assets, filtersImg } from "../../assets";
import { categoryData } from "../../data/categoryData";

export const CategoryMenu = ({ title = "Danh mục sản phẩm" }) => {
  const [activeCategory, setActiveCategory] = useState("Bộ Lọc Dầu");
  const activeData = categoryData[activeCategory];
 const iconMap = {
    "Bộ Lọc Dầu": filtersImg.Dau,
    "Bộ Lọc Không Khí": filtersImg.KhongKhi,
    "Bộ Lọc Nhiên Liệu": filtersImg.NhienLieu,
    "Bộ Lọc Trong Cabin": filtersImg.Cabin,
  };
 const getCategoryIcon = (category) =>
    iconMap[category] || filtersImg.DefaultIcon || filtersImg.Cabin;

  return (
    <div className="relative inline-block text-left group">
      {/* Button mở menu */}
      <button className="flex items-center gap-2 bg-[#0155C6] rounded-lg px-4 py-3 text-white font-bold cursor-pointer">
        <img src={assets.Menu} alt="Menu" />
        <span className="pr-4">{title}</span>
        <img src={assets.Dropdown} alt="Dropdown" />
      </button>

      {/* Dropdown */}
      <div
        className="absolute left-0 mt-2 w-[1000px] bg-white border border-gray-200 rounded-b-md shadow-lg
         opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200
         before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2"
      >
        <div className="grid grid-cols-[300px_1fr]">
          {/* Cột trái */}
          <div className="pb-10 border-r border-gray-200">
            <ul>
              {Object.keys(categoryData).map((category) => (
                <li
                  key={category}
                  onMouseEnter={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                    activeCategory === category
                      ? "bg-[#F4F6F8] border-l-4 border-[#0373F3] font-bold text-[#0373F3]"
                      : "hover:bg-[#F4F6F8] hover:border-l-[4px] hover:border-l-[#0373F3] hover:font-bold hover:text-[#0373F3]"
                  }`}
                >
                  <img
                    src={getCategoryIcon(category)}
                    alt={category}
                    className="w-10"
                  />
                  {category}
                  <img src={assets.ArrowRight} alt="" className="ml-auto" />
                </li>
              ))}
            </ul>
          </div>

          {/* Cột phải */}
          <div className="flex flex-col justify-between gap-4 p-6 bg-[#F4F6F8] transition-all duration-300 ease-in-out">
            {/* Danh mục con */}
            <div className="grid grid-cols-3 gap-4 w-full pb-7 border-b border-[#919EAB3D]">
              {activeData.filters.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white px-4 py-3 rounded-lg cursor-pointer hover:shadow-md"
                >
                  <img src={item.img} alt={item.name} className="w-10" />
                  {item.name}
                </div>
              ))}
            </div>

            {/* Sản phẩm bán chạy */}
            <div className="flex flex-col justify-center w-full">
              <div className="flex justify-between items-center w-full">
                <h2 className="text-lg font-semibold">Sản Phẩm Bán Chạy</h2>
                <a
                  href="/"
                  className="flex items-center gap-2 text-[#0373F3] font-semibold"
                >
                  Xem tất cả
                  <img src={assets.ArrowDoubleRight} alt="ArrowDoubleRight" />
                </a>
              </div>

              <div className="grid grid-cols-5 gap-4 mt-4">
                {activeData.products.map((p) => (
                  <div
                    key={p.id}
                    className="flex flex-col bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                  >
                    <div className="p-2 flex justify-center">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="rounded-t-lg w-[184px] object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 px-3 pb-5 pt-2">
                      <h2 className="font-semibold line-clamp-2 text-sm">
                        {p.title}
                      </h2>
                      <div>
                        <p className="text-[#B71D18] text-[18px] font-semibold">
                          {p.price.toLocaleString("vi-VN")} đ
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-[#919EAB] text-[14px] line-through">
                            {p.oldPrice.toLocaleString("vi-VN")} đ
                          </p>
                          <p className="text-[#B71D18]">{p.discount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
