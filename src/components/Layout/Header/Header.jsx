import React, { useState } from "react";
import { assets, productsImg } from "../../../assets";
import { CategoryMenu } from "../../CategoryMenu/CategoryMenu";
import { motion , AnimatePresence } from "framer-motion";

export const Header = () => {

  return (
    <header className="flex flex-col gap-3 pb-4">
      {/* ===== Top Banner ===== */}
      <TopBanner />

      <div className="px-30">
        <Divider />

        {/* ===== Middle Section ===== */}
        <HeaderMiddle />

        <Divider />

        {/* ===== Bottom Navigation ===== */}
        <HeaderBottom />
      </div>
    </header>
  );
};

/* ===============================
   COMPONENT: Top Banner
================================= */
const TopBanner = () => (
  <div className="flex justify-between items-center px-30 bg-gradient-to-l from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] text-white text-sm">
    <PromoMessage />
    <ContactSection />
  </div>
);

const PromoMessage = () => (
  <div className="flex items-center gap-2">
    <img src={assets.MoneyIcon} alt="Money Icon" />
    <p>
      Nhập mã{" "}
      <span className="font-bold pr-1 text-[#FFD666]">NEWBIE</span>
      giảm ngay 10% cho lần đầu mua hàng.
    </p>
  </div>
);

const ContactSection = () => (
  <div className="flex gap-6">
    <div className="flex items-center gap-2">
      <img src={assets.CallIcon} alt="Call Icon" />
      <p>
        Hotline:{" "}
        <span className="font-bold text-[#FFD666]">0283 760 7607</span>
      </p>
    </div>
    <div className="flex items-center gap-2">
      <img src={assets.DeviceIcon} alt="Device Icon" />
      <span>Tải ứng dụng</span>
    </div>
  </div>
);

/* ===============================
   COMPONENT: Header Middle
================================= */
const HeaderMiddle = () => {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className="flex justify-between items-center pb-4 gap-8 bg-white">
      {/* Logo */}
      <a href="/">
        <img src={assets.Logo} alt="Logo" />
      </a>

      {/* Search Bar */}
      <SearchBar />

      {/* User Actions */}
      <div className="flex items-center gap-6">
        <LanguageSelector />
        <CartDropdown cartVisible={cartVisible} />
        <UserAccount />
      </div>
    </div>
  );
};

const SearchBar = () => (
  <div className="w-1/2">
    <div className="flex items-center border-2 border-[#0373F3] rounded-full pr-2 pl-5 py-2 bg-white">
      <input
        type="text"
        placeholder="Tìm sản phẩm"
        className="h-[32px] w-full focus:outline-none bg-transparent"
      />
      <button className="flex items-center justify-center bg-transparent mr-2 p-0 cursor-pointer">
        <img src={assets.Capture} alt="Capture" />
      </button>
      <button className="flex items-center justify-center bg-[#0373F3] cursor-pointer hover:bg-blue-600 transition-colors text-white rounded-full ml-2 px-6 py-3">
        <img src={assets.Search} alt="Search" />
      </button>
    </div>
  </div>
);

const LanguageSelector = () => (
  <div className="flex items-center gap-2 cursor-pointer h-9">
    <img src={assets.FlatVn} alt="FlatVn" />
    <p>VI</p>
  </div>
);

/* ===============================
   COMPONENT: Cart Dropdown
================================= */
const CartDropdown = ({ cartVisible }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex items-center gap-2 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={assets.Cart} alt="Cart Icon" />
      <p>Giỏ hàng</p>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 w-[214px] mt-4 bg-white border border-gray-200 rounded-lg shadow-lg z-20
                   before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
          >
            {!cartVisible ? <CartItem /> : <EmptyCart />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
};

const CartItem = () => (
  <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="p-2">
      <img
        src={productsImg.Product2}
        alt="Product1"
        className="rounded-t-lg w-[214px] cursor-pointer"
      />
    </div>
    <div className="flex flex-col gap-4 px-3 pb-5 pt-2">
      <img src={assets.Badge} alt="Badge" className="w-[124px]" />
      <h2 className="font-semibold line-clamp-2">
        Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-[#B71D18] text-[20px] font-semibold">
          299,000 <span className="underline">đ</span>
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[#919EAB] text-[14px] line-through">
            329,000 <span className="underline">đ</span>
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

const EmptyCart = () => (
  <div className="p-4 text-center text-gray-500 text-sm">
    <p>Giỏ hàng của bạn đang trống.</p>
  </div>
);

const UserAccount = () => (
  <div className="flex items-center gap-2 cursor-pointer">
    <img src={assets.User} alt="User Icon" />
    <p>Tài khoản</p>
  </div>
);

/* ===============================
   COMPONENT: Header Bottom
================================= */
const HeaderBottom = () => (
  <div className="flex items-center gap-6 w-full">
    <CategoryMenu />
    <div className="flex flex-1 items-center justify-between gap-10">
      <NavLinks />
      <SupportLinks />
    </div>
  </div>
);

const NavLinks = () => (
  <ul className="flex items-center gap-4 font-medium">
    {["Về chúng tôi", "Bài viết", "Catalog", "Liên hệ"].map((item) => (
      <li key={item}>
        <a href="#" className="hover:text-[#0373F3] transition-colors">
          {item}
        </a>
      </li>
    ))}
  </ul>
);

const SupportLinks = () => {
  const links = [
    { icon: assets.Times, text: "Hỗ trợ 24/7" },
    { icon: assets.Hand_Icon, text: "Miễn phí vận chuyển" },
    { icon: assets.Truck_Icon, text: "Giao hàng nhanh 2h" },
    { icon: assets.Subtract, text: "30 ngày đổi trả" },
  ];
  return (
    <ul className="flex items-center gap-4">
      {links.map(({ icon, text }) => (
        <li key={text} className="flex items-center gap-2 font-medium">
          <img src={icon} alt={text} />
          {text}
        </li>
      ))}
    </ul>
  );
};

/* ===============================
   UTIL COMPONENTS
================================= */
const Divider = () => <div className="border border-[#FFFFFF33]" />;
