import Logo from "./logo.png";
import Dropdown from "./dropdown.png";
import Menu from "./menu.png";
import Truck_Icon from "./truck_fill.svg";
import Times from "./times.svg";
import FlatVn from "./country-vietnam.png";
import Badge from "./Badge.svg";
import Banner from "./banner.svg";
import FilterIcon from "./filterIcon.svg";
import Conversation from "./vector.svg";
import Map from "./map.svg";
import BoCongThuong from "./bo_cong_thuong.svg";
import BtnAppStore from "./btn_app_store.svg";
import BtnGooglePlay from "./btn_google_play.svg";
import BackgroundPattern from "./backgroundPattern.svg";

import CallIcon from "./Bold/Call/Vector.png";
import MoneyIcon from "./Bold/Money/Sale.png";
import DeviceIcon from "./Bold/Device/Vector.png";
import User from "./Bold/Users/Vector.png";
import Cart from "./Bold/Shopping/Vector.png";
import Subtract from "./Bold/Arrows/Subtract.svg";
import Hand_Icon from "./Bold/Hands/Hand_Money.png";

import ArrowRight from "./Outline/Arrows/Vector.svg";
import Capture from "./Outline/Video/Vector.png";
import Search from "./Outline/Search/Vector.png";
import ArrowDoubleRight from "./Outline/Arrows/ArrowDoubleRight.svg";
import ArrowRightIcon from "./Outline/Arrows/ArrowRightIcon.svg";
import ArrowLeftIcon from "./Outline/Arrows/ArrowLeft.svg";
import ArrowDownIcon from "./Outline/Arrows/ArrowDownIcon.svg";
import Unread from "./Outline/Messages/Unread.svg";

import KhongKhi from "./Filters/bo_loc_khong_khi.png";
import Dau from "./Filters/bo_loc_dau.svg";
import NhienLieu from "./Filters/bo_loc_nhien_lieu.svg";
import Cabin from "./Filters/bo_loc_trong_cabin.svg";

import Product1 from "./Products/Img_Product_M.1.svg";
import Product2 from "./Products/Img_Product_M.2.svg";

import Delivery from "./Icon/Delivery.svg";
import Money from "./Icon/Money.svg";
import Support from "./Icon/Support.svg";
import Package from "./Icon/Package.svg";


import ChevronRight from "./Line/Arrows/ArrowRightIcon.svg";

export const assets = {
  CallIcon,
  MoneyIcon,
  DeviceIcon,
  Logo,
  Capture,
  Search,
  FlatVn,
  User,
  Cart,
  Dropdown,
  Menu,
  Times,
  Truck_Icon,
  Subtract,
  Hand_Icon,
  ArrowRight,
  ArrowDoubleRight,
  Badge,
  Banner,
  ArrowRightIcon,
  ArrowLeftIcon,
  FilterIcon,
  ArrowDownIcon,
  Conversation,
  Unread,
  Delivery,
  Money,
  Support,
  Package,
  Map,
  ChevronRight,
  BoCongThuong,
  BtnAppStore,
  BtnGooglePlay,
  BackgroundPattern,
};

export const filtersImg = {
  KhongKhi,
  Dau,
  NhienLieu,
  Cabin,
};

export const productsImg = {
  Product1,
  Product2,
};

export const products = [
  {
    id: 1,
    img: productsImg.Product1,
    title: "Lọc gió động cơ – Chevrolet Colorado, Trailblazer (52046262)",
    category: "Lọc gió Động cơ - Air Filter",
    brand: "Asakashi",
    origin: "Nhật Bản",
    year: 2021,
    price: 299000,
    oldPrice: 329000,
    discount: 10, // %
    sold: 320,
    isFeatured: true,
  },
  {
    id: 2,
    img: productsImg.Product2,
    title: "Bộ lọc nhiên liệu – Toyota Innova, Fortuner",
    category: "Lọc Nhiên Liệu - Fuel Filter",
    brand: "Bosch",
    origin: "Đức",
    year: 2020,
    price: 250000,
    oldPrice: 290000,
    discount: 14,
    sold: 270,
    isFeatured: false,
  },
  {
    id: 3,
    img: productsImg.Product1,
    title: "Bộ lọc dầu – Mazda CX5, 6",
    category: "Bộ lọc dầu",
    brand: "Hyundai",
    origin: "Trung Quốc",
    year: 2019,
    price: 480000,
    oldPrice: 500000,
    discount: 4,
    sold: 180,
    isFeatured: false,
  },
  {
    id: 4,
    img: productsImg.Product2,
    title: "Lọc gió động cơ – Honda City",
    category: "Lọc gió Động cơ - Air Filter",
    brand: "Bosch",
    origin: "Nhật Bản",
    year: 2021,
    price: 180000,
    oldPrice: 200000,
    discount: 10,
    sold: 340,
    isFeatured: true,
  },
  {
    id: 5,
    img: productsImg.Product1,
    title: "Bộ lọc nhiên liệu – Mitsubishi Triton",
    category: "Lọc Nhiên Liệu - Fuel Filter",
    brand: "Asakashi",
    origin: "Đức",
    year: 2020,
    price: 320000,
    oldPrice: 350000,
    discount: 8,
    sold: 195,
    isFeatured: false,
  },
  {
    id: 6,
    img: productsImg.Product1,
    title: "Bộ lọc dầu – Toyota Camry",
    category: "Bộ lọc dầu",
    brand: "Hyundai",
    origin: "Nhật Bản",
    year: 2021,
    price: 120000,
    oldPrice: 150000,
    discount: 20,
    sold: 520,
    isFeatured: true,
  },
  {
    id: 7,
    img: productsImg.Product2,
    title: "Lọc gió điều hòa – Kia Morning",
    category: "Lọc gió Động cơ - Air Filter",
    brand: "Bosch",
    origin: "Trung Quốc",
    year: 2018,
    price: 90000,
    oldPrice: 100000,
    discount: 10,
    sold: 145,
    isFeatured: false,
  },
  {
    id: 8,
    img: productsImg.Product1,
    title: "Bộ lọc nhiên liệu – Ford Ranger",
    category: "Lọc Nhiên Liệu - Fuel Filter",
    brand: "Asakashi",
    origin: "Đức",
    year: 2021,
    price: 550000,
    oldPrice: 600000,
    discount: 8,
    sold: 390,
    isFeatured: true,
  },
  {
    id: 9,
    img: productsImg.Product1,
    title: "Bộ lọc dầu – Nissan X-Trail",
    category: "Bộ lọc dầu",
    brand: "Bosch",
    origin: "Nhật Bản",
    year: 2019,
    price: 270000,
    oldPrice: 300000,
    discount: 10,
    sold: 210,
    isFeatured: false,
  },
  {
    id: 10,
    img: productsImg.Product2,
    title: "Lọc gió động cơ – Mazda 3",
    category: "Lọc gió Động cơ - Air Filter",
    brand: "Hyundai",
    origin: "Trung Quốc",
    year: 2020,
    price: 190000,
    oldPrice: 220000,
    discount: 13,
    sold: 180,
    isFeatured: true,
  },
];




export const featureList = [
  {
    id: 1,
    title: "Miễn phí vận chuyển",
    description: "Với hoá đơn từ 1 triệu",
    img: assets.Money,
  },
  {
    id: 2,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    img: assets.Support,
  },
  {
    id: 3,
    title: "Giao hàng nhanh 2h",
    description: "Trong vòng bán kính 10km nội thành TP HCM",
    img: assets.Delivery,
  },
  {
    id: 4,
    title: "30 ngày đổi trả",
    description:
      "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    img: assets.Package,
  },
];
