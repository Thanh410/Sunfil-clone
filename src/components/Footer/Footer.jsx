import React, { useEffect, useState } from "react";
import { assets } from "../../assets";
import { ArrowDown, ArrowDownIcon, ChevronDown } from "lucide-react";

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Theo dõi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Hàm scroll lên top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-full ">
      {/* Pattern nền */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `url(${assets.BackgroundPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Nội dung */}
      <div className="relative flex items-center px-30">
        <div className="flex items-start justify-between gap-8 py-20 w-full">
          {/* Cột 1 */}
          <div className="flex flex-col gap-8 max-w-[320px]">
            <h2 className="font-bold uppercase text-[#1C252E]">
              Viet Hung Auto Production Trading Joint Stock Company
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-[#637381]">
                Tax code: <span className="font-medium ml-2">0305094228</span>
              </p>
              <p className="text-[#637381]">
                Address:
                <span className="font-medium ml-2">
                  13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
                  Nam.
                </span>
              </p>
              <p className="text-[#637381]">
                Phone number:
                <span className="font-medium ml-2">0283 760 7607</span>
              </p>
              <p className="text-[#637381]">
                Opening hour:
                <span className="font-medium ml-2">
                  09:00 - 22:00 from Mon - Fri
                </span>
              </p>
            </div>
            <img
              src={assets.BoCongThuong}
              alt="BoCongThuong"
              className="w-[200px]"
            />
          </div>

          {/* Cột 2 */}
          <div className="flex flex-col gap-8">
            <h2 className="font-bold uppercase mb-4">Sitemap</h2>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[#637381] cursor-pointer">About</p>
              <p className="text-[#637381] cursor-pointer">Article</p>
              <p className="text-[#637381] cursor-pointer">Cart</p>
              <p className="text-[#637381] cursor-pointer">Contact</p>
            </div>
          </div>

          {/* Cột 3 */}
          <div className="flex flex-col gap-8">
            <h2 className="font-bold uppercase mb-4">Legal</h2>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-end gap-2">
                <div className="border-b-2 border-[#1C252E] w-3"></div>
                <p className="text-[#1C252E] font-medium">Privacy policy</p>
              </div>
              <p className="text-[#637381] cursor-pointer">Cookie policy</p>
              <p className="text-[#637381] cursor-pointer">Delivery policy</p>
              <p className="text-[#637381] cursor-pointer">FAQs</p>
            </div>
          </div>

          {/* Cột 4 */}
          <div className="flex flex-col gap-8">
            <h2 className="font-bold uppercase mb-4">Download App</h2>
            <div className="flex flex-col gap-3">
              <img
                src={assets.BtnGooglePlay}
                alt="BtnGooglePlay"
                className="cursor-pointer"
              />
              <img
                src={assets.BtnAppStore}
                alt="BtnAppStore"
                className="cursor-pointer"
              />
            </div>

            {/* Ngôn ngữ */}
            <div className="flex items-center gap-2 mt-3 cursor-pointer">
              <img src={assets.FlatVn} alt="flag" />
              <span className="text-[#1C252E] font-medium">VI</span>
              <ChevronDown size={16} className="text-[#1C252E]" />
            </div>
          </div>
        </div>

        {/* Nút back to top */}
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border border-[#919EAB33] shadow-md bg-white hover:bg-[#F4F6F8] transition-all duration-300 ease-in-out animate-fadeIn cursor-pointer"
          >
            <img src={assets.ArrowDownIcon} alt="up" />
          </button>
        )}
      </div>
    </div>
  );
};
