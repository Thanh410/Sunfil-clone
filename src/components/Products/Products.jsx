import React, { useEffect, useRef, useState } from "react";
import { assets, products } from "../../assets";
import { ChevronDown } from "lucide-react";
import { ProductCard } from "../ProductCard/ProductCard";
import { FilterGroup } from "../Filters/FilterGroup";
import { filtersConfig, tabs } from "../../data/filtersConfig";

export const Products = () => {
  const [activeTab, setActiveTab] = useState("related");
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    year: [],
    origin: [],
    priceRange: "",
  });
  const [visibleCount, setVisibleCount] = useState(8);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 8);
      }
    });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (key, value) => {
    setFilters((prev) => {
      const config = filtersConfig[key];

      if (config.type === "checkbox") {
        const arr = prev[key].includes(value)
          ? prev[key].filter((v) => v !== value)
          : [...prev[key], value];
        return { ...prev, [key]: arr };
      }

      if (config.type === "button") {
        return {
          ...prev,
          [key]: prev[key] === value ? "" : value,
        };
      }
      return prev;
    });
  };

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      !filters.category.length || filters.category.includes(p.category);
    const matchBrand =
      !filters.brand.length || filters.brand.includes(p.brand);
    const matchYear =
      !filters.year.length || filters.year.includes(String(p.year));
    const matchOrigin =
      !filters.origin.length || filters.origin.includes(p.origin);
    const matchPrice =
      !filters.priceRange ||
      (filters.priceRange === "below100" && p.price < 100000) ||
      (filters.priceRange === "100-300" &&
        p.price >= 100000 &&
        p.price <= 300000) ||
      (filters.priceRange === "300-500" &&
        p.price >= 300000 &&
        p.price <= 500000) ||
      (filters.priceRange === "above500" && p.price > 500000);

    return (
      matchCategory && matchBrand && matchYear && matchOrigin && matchPrice
    );
  });

  return (
    <div className="grid grid-cols-[300px_1fr] gap-4 px-30">
      {/* Sidebar Filter */}
      <div className="sticky top-0 flex flex-col gap-2 w-[300px] bg-white shadow-md rounded-md py-3 self-start">
        <div className="flex gap-3 p-3">
          <img src={assets.FilterIcon} alt="FilterIcon" />
          <h2 className="text-[24px] text-[#0373F3] font-bold">Bộ lọc</h2>
        </div>

        {Object.entries(filtersConfig).map(([key, config]) => (
          <FilterGroup
            key={key}
            title={config.title}
            type={config.type}
            options={config.options}
            selected={filters[key]}
            onSelect={(val) =>
              handleSelect(key, val.value || val.label || val)
            }
          />
        ))}
      </div>

      {/* Product list */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-[20px] font-semibold">Danh sách sản phẩm</h2>
          <div className="flex items-center justify-between gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 font-semibold text-[14px] rounded-lg cursor-pointer transition-all duration-300 ${activeTab === tab.id
                    ? "bg-white border border-[#0373F3] text-[#1C252E] scale-105 shadow-sm"
                    : "bg-white border border-[#919EAB3D] text-[#1C252E]"
                  } hover:bg-[#F5F5F5]`}
              >
                {tab.label}
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
              Giá: Thấp → Cao <ChevronDown className="w-4 h-4" />
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 items-stretch">
          {filteredProducts.length ? (
            filteredProducts.slice(0, visibleCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4 py-10">
              Không tìm thấy sản phẩm phù hợp
            </p>
          )}
          
        </div>
      </div>
    </div>
  );
};
